import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const helloWorldHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: 'Hello World!'
    };
}