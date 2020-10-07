let  { AWS } = require('./dynamodb');
const docClient = new AWS.DynamoDB.DocumentClient();
// DocumentClient is a class of the DynamoDB subset of the AWS SDK. 
// Its goal is to simplify working with table items by abstracting the operations.
const DynamoDB = {}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// Function to Create an Item to DB
DynamoDB.addItem = async function ({ table, userData }) {
    try {
        let params = {
            TableName: table,
            Item: userData
        };
        console.log("Params desde DynanoDb.addItem",params);
        await delay(100);
        //return params;
        return await docClient.put(params).promise();
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Function to get and item
DynamoDB.getItem = async function  (table, keys)  {
    try {
        let params = {
            TableName: table, 
            Key: keys
        }
        console.log("Params desde DynanoDb.getItem",params);
        return params;
        //return await docClient.get(params).promise();
    } catch (error) {
        console.log(error);
        return error;
    }
};

// Function to Delete an item
DynamoDB.deleteItem = async function  ({table, keys})  {
    try {
        let params = {
            TableName: table,
            Key: keys
        }
        return await docClient.delete(params).promise();
    } catch (error) {
        console.log(error);
        return error;
    }
};





module.exports = { DynamoDB  };

