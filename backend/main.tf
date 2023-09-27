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
        Resource = "arn:aws:dynamodb:us-west-1:${aws:account}:table/ClickCountTable"
      }
    ]
  })
}

resource "aws_iam_policy_attachment" "lambda_dynamodb_policy" {
  policy_arn = aws_iam_policy.lambda_dynamodb_policy.arn
  roles      = [aws_iam_role.lambda_exec_role.name]
}

resource "aws_lambda_function" "click_count_lambda" {
  function_name = "IncrementClickCount"
  runtime      = "python3.8"
  handler      = "lambda_function.lambda_handler"
  filename     = "lambda_function.zip" # Upload your Python code as a ZIP file
  source_code_hash = filebase64sha256("lambda_function.zip")
  role = aws_iam_role.lambda_exec_role.arn
}



