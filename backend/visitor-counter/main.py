import boto3
import os

dynamodb = boto3.client('dynamodb', region_name=os.environ['AWS_REGION'])
table_name = os.environ['DYNAMODB_TABLE']


def lambda_handler(event, context):
    try:
        # Increment the total click count
        dynamodb.update_item(
            TableName=table_name,
            Key={'counter_id': {'S': 'total_clicks'}},
            UpdateExpression='SET clicks = if_not_exists(clicks, :zero) + :val',
            ExpressionAttributeValues={
                ':val': {'N': '1'},
                ':zero': {'N': '0'}
            }
        )

        response = {
            'statusCode': 200,
            'body': 'Total click count updated successfully'
        }
    except Exception as e:
        response = {
            'statusCode': 500,
            'body': f'Error: {str(e)}'
        }

    return response
