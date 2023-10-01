import boto3


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

        return {
            'statusCode': 200,
            'body': f'Click Count: {click_count}'
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'body': str(e)
        }