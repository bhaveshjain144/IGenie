import AWS from "aws-sdk";

// Update AWS config
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID, // Do NOT HARD-CODE your secret credentials here
    secretAccessKey: process.env.SECRET_ACCESS_KEY, // Do NOT HARD-CODE your secret credentials here
    region: process.env.DYNAMODB_REGION,
});

// Create DynamoDB service object
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: "latest" });

export default db;