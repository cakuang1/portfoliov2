import boto3
import json

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    table_name = 'ClickCountTable'
    record_id = '1'

    try:
        response = dynamodb.get_item(
            TableName=table_name,
            Key={
                'id': {'S': record_id}
            }
        )
        item = response.get('Item', {})
        click_count = item.get('click_count', {}).get('N', '0')

        # Create a dictionary to represent the JSON response
        response_body = {
            'click_count': click_count
        }

        # Convert the dictionary to a JSON-formatted string
        response_json = json.dumps(response_body)

        return {
            'statusCode': 200,
            'body': response_json,
            'headers': {
                'Content-Type': 'application/json'
            }
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)}),  # Error response as JSON
            'headers': {
                'Content-Type': 'application/json'
            }
        }
