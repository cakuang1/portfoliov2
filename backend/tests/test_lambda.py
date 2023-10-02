import unittest
import boto3
import os
import json


class TestLambdaIntegration(unittest.TestCase):
    def setUp(self):

        aws_access_key_id = os.environ.get('AWS_ACCESS_KEY_ID')
        aws_secret_access_key = os.environ.get('AWS_SECRET_ACCESS_KEY')

        # Set up the DynamoDB and Lambda clients using the environment variables
        self.dynamodb = boto3.client('dynamodb', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key,region_name = 'us-west-1')
        self.lambda_client = boto3.client('lambda', aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key,region_name = 'us-west-1')
        self.table_name = 'ClickCountTable'

        # Create a test record in DynamoDB
        self.create_test_record()


    def tearDown(self):
        self.delete_test_record()

    def create_test_record(self):

        response = self.dynamodb.put_item(
            TableName=self.table_name,
            Item={
                'id': {'S': '1'},
                'click_count': {'N': '10'}  
            }
        )

    def delete_test_record(self):

        response = self.dynamodb.delete_item(
            TableName=self.table_name,
            Key={'id': {'S': '1'}}
        )

    def test_lambda_integration(self):
        function_name = 'arn:aws:lambda:us-west-1:973111212824:function:IncrementClickCount'
        response = self.lambda_client.invoke(
            FunctionName=function_name,
            InvocationType='RequestResponse',  
 
        )
        response_payload = response['Payload'].read().decode()
        body = json.loads(response_payload)['body']
        self.assertEqual(body, "Value updated successfully")
        updated_count = self.get_click_count()
        self.assertEqual(updated_count, 11)  

    def get_click_count(self):
        response = self.dynamodb.get_item(
            TableName=self.table_name,
            Key={'id': {'S': '1'}}
        )
        item = response.get('Item')
        return int(item['click_count']['N']) if item else 0

if __name__ == '__main__':
    unittest.main()
