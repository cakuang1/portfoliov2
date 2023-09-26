resource "aws_api_gateway_rest_api" "my_api" {
  name        = "MyAPI"
  description = "My API description"
}

resource "aws_api_gateway_resource" "root" {
  rest_api_id = aws_api_gateway_rest_api.my_api.id
  parent_id   = aws_api_gateway_rest_api.my_api.root_resource_id
  path_part   = "v1"
}

resource "aws_api_gateway_method" "update_dynamodb" {
  rest_api_id   = aws_api_gateway_rest_api.my_api.id
  resource_id   = aws_api_gateway_resource.root.id
  http_method   = "POST"
  authorization = "NONE"  # Assuming no authorization required
}
