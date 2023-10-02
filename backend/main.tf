provider "aws" {
  region = "us-west-1" 
}

resource "aws_dynamodb_table" "click_count" {
  name           = "ClickCountTable"
  billing_mode   = "PAY_PER_REQUEST" 
  hash_key       = "id"
  attribute {
    name = "id"
    type = "S"
  }
}



resource "aws_iam_role" "lambda_exec_role" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}
data "aws_caller_identity" "current" {}

resource "aws_iam_policy" "lambda_dynamodb_policy" {
  name = "lambda_dynamodb_policy"

  description = "IAM policy for Lambda to access DynamoDB"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Action = [
          "dynamodb:UpdateItem",
          "dynamodb:GetItem"
        ],
        Effect = "Allow",
        Resource = "arn:aws:dynamodb:us-west-1:${data.aws_caller_identity.current.account_id}:table/ClickCountTable"
      }
    ]
  })
}

resource "aws_iam_policy_attachment" "lambda_dynamodb_policy" {
   name       = "lambda_dynamodb_attachment"
  policy_arn = aws_iam_policy.lambda_dynamodb_policy.arn
  roles      = [aws_iam_role.lambda_exec_role.name]
}
resource "aws_iam_policy_attachment" "get_lambda_dynamodb_policy" {
  name       = "get_lambda_dynamodb_attachment"
  policy_arn = aws_iam_policy.lambda_dynamodb_policy.arn
  roles      = [aws_iam_role.lambda_exec_role.name]
}


resource "aws_lambda_function" "post_click_count_lambda" {
  function_name = "IncrementClickCount"
  runtime      = "python3.8"
  handler      = "lambda_function.lambda_handler"
  filename     = "lambda_function.zip" 
  source_code_hash = filebase64sha256("lambda_function.zip")
  role = aws_iam_role.lambda_exec_role.arn
}

resource "aws_lambda_function" "get_click_count_lambda" {
  function_name    = "GetClickCount"
  runtime          = "python3.8"
  handler          = "getlambda.lambda_handler"
  filename         = "getlambda.zip"
  source_code_hash = filebase64sha256("getlambda.zip") # Corrected source code hash calculation
  role             = aws_iam_role.lambda_exec_role.arn
}


resource "aws_apigatewayv2_api" "my_api" {
  name          = "MyAPIGateway"
  protocol_type = "HTTP"
  cors_configuration {
    allow_origins = ["https://carykuang.com"]
    allow_methods = ["GET", "POST"]
    allow_headers = ["*"]
  }
}




resource "aws_apigatewayv2_integration" "get_lambda_integration" {
  api_id             = aws_apigatewayv2_api.my_api.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.get_click_count_lambda.invoke_arn
  integration_method = "POST" # GET method integration
  timeout_milliseconds    = 30000
}

resource "aws_apigatewayv2_integration" "post_lambda_integration" {
  api_id             = aws_apigatewayv2_api.my_api.id
  integration_type   = "AWS_PROXY"
  integration_uri    = aws_lambda_function.post_click_count_lambda.invoke_arn
  integration_method = "POST" # POST method integration
  timeout_milliseconds    = 30000
}

resource "aws_apigatewayv2_route" "get_lambda_route" {
  api_id    = aws_apigatewayv2_api.my_api.id
  route_key = "GET /clicks"
  target    = "integrations/${aws_apigatewayv2_integration.get_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "post_lambda_route" {
  api_id    = aws_apigatewayv2_api.my_api.id
  route_key = "POST /clicks"
  target    = "integrations/${aws_apigatewayv2_integration.post_lambda_integration.id}"
}

resource "aws_apigatewayv2_stage" "lambda_stage" {
  api_id      = aws_apigatewayv2_api.my_api.id
  name        = "prod"
  auto_deploy = true
}

output "api_url" {
  value = aws_apigatewayv2_api.my_api.api_endpoint
}