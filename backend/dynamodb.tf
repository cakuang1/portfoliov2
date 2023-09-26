provider "aws" {
  region = "us-west-1"  # Replace with your desired AWS region
}

resource "aws_dynamodb_table" "click_counter" {
  name           = "ClickCounter"
  billing_mode   = "PAY_PER_REQUEST"  # You pay only for what you use
  key {
    name = "counter_id"
    type = "S"
  }
}
