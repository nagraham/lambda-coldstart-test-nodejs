# Lambda Cold Start Test with NodeJS and DynamoDB

This repo contains code for two simple Node handlers:

- A "Hello World" handler that prints a message to the console
- A "PutTodo" handler that calls PutItem to write a simple item to Dynamo

These handlers can be used as a simple test for Lambda performance when using dynamoDB. A blog post with a write up using these functions can be found here: https://alexandergraham.dev/posts/lambda-cold-starts-java-nodejs-dynamodb

## Build and Deploy

To build the package:

```
npm run release
```

This results in a single transpiled JavaScript file at `out/handlers.js`. You can upload this to a Lambda function via the AWS console.

You can control which of the two lambda handlers (and their dependent code) gets bundled by commenting one or the other in `src/handlers.ts`. 

## Run Cold Start Tests

```
./test-cold-starts.sh my-lambda-name
```

## Run Warm Lambda Tests

```
./test-warm-lambdas.sh my-lambda-name
```