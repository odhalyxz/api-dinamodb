let  { AWS } = require('./dynamodb');
const docClient = new AWS.DynamoDB.DocumentClient();
// DocumentClient is a class of the DynamoDB subset of the AWS SDK. 
// Its goal is to simplify working with table items by abstracting the operations.
const DynamoDB = {}


// Function to Create an Item to DB
DynamoDB.addItem = async (data) => {
    try {
        return await docClient.put(data).promise();
    } catch (error) {
        console.log(error);
        return error;
    }
}

// Function to get and item
DynamoDB.getItem = async (data) => {
    try {
        
        return await docClient.get(data).promise();
    } catch (error) {
        console.log(error);
        return error;
    }
};





module.exports = { DynamoDB  };

