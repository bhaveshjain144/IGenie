import AWS from "aws-sdk";
// Update AWS config
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID, // Do NOT HARD-CODE your secret credentials here
    secretAccessKey: process.env.SECRET_ACCESS_KEY, // Do NOT HARD-CODE your secret credentials here
    region: process.env.S3_REGION,
});
const s3Params = {
    signatureVersion: "v4",
};
// Create DynamoDB service object
const s3 = new AWS.S3(s3Params);

export default s3;