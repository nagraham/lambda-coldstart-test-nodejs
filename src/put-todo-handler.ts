import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { v4 as uuid } from "uuid";

const dynamoDb = new DocumentClient({
    region: "us-west-2"
});

const tableName = "TestColdStarts20200811";
const fakeTitle = "fake title";
const fakeUser = "user123";

export const putTodoHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    await dynamoDb.put({
        TableName: tableName,
        Item: {
            "pk": uuid(),
            "title": fakeTitle,
            "user": fakeUser
        },
        ReturnValues: "NONE",
    }).promise();

    // don't handle error; just let it fail the function

    return {
        statusCode: 200,
        body: ""
    };
}