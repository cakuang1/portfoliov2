import boto3

def lambda_handler(event, context):
    dynamodb = boto3.client('dynamodb')
    table_name = 'ClickCountTable'
    record_id = '1'
    increment_value = 1

    # Check if the 'click_count' attribute exists in the item
    # If it doesn't exist, set it to the initial increment_value
    update_expression = 'SET click_count = if_not_exists(click_count, :initial) + :increment'
    
    response = dynamodb.update_item(
        TableName=table_name,
        Key={
            'id': {'S': record_id}
        },
        UpdateExpression=update_expression,
        ExpressionAttributeValues={
            ':increment': {'N': str(increment_value)},
            ':initial': {'N': '0'}  # Initial value if 'click_count' doesn't exist
        }
    )

    return {
        'statusCode': 200,
        'body': 'Value updated successfully'
    }
