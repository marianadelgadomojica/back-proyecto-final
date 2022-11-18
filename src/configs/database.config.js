import AWS from "aws-sdk";

export const config = {
    aws_table_name: process.env.AWS_TABLE_NAME || "",
    aws_local_config: {
        //Provide details for local configuration
    },
    aws_remote_config: {
        accessKeyId: process.env.AWS_accessKeyId || "",
        secretAccessKey: process.env.AWS_secretAccessKey || "",
        region: process.env.AWS_region || "",
    }
}

AWS.config.update(config.aws_remote_config);

const docClient = new AWS.DynamoDB.DocumentClient();

export default docClient;


