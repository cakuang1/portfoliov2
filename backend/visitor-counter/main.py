import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    table_name = 'ClickCountTable'
    record_id = '1'
    increment_value = 1
    response = dynamodb.update_item(
        TableName=table_name,
        Key={
            'id': {'S': record_id}
        },
        UpdateExpression='SET click_count = click_count + :increment',
        ExpressionAttributeValues={
            ':increment': {'N': str(increment_value)}
        }
    )

    return {
        'statusCode': 200,
        'body': 'Value updated successfully'
    }
