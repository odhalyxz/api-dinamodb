// Load the AWS SDK for Node.js
const  AWS = require('aws-sdk');
const { REGION, ENDPOINT, ACCESSKEYID, SECRETACCESSKEY} = require('../config');



// CONFIG.JSON
AWS.config.update({ 
    region: REGION, 
    endpoint: ENDPOINT,
    accessKeyId: ACCESSKEYID,  
    secretAccessKey: SECRETACCESSKEY
})

// Create the DynamoDB service object
/* The easiest way to communicate with DynamoDB from your Node.js application
is through the DocumentClient class, which requires asynchronous communication.
Document­Client , like any part of the AWS SDK.

DocumentClient is a class of the DynamoDB subset of the AWS SDK. Its goal is to sim-
plify working with table items by abstracting the operations. It exposes a simple API, and
we’ll cover only the pieces you need later in this chapter. In case you want to see the API
documentation */

//const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
//const docClient = new AWS.DynamoDB.DocumentClient();

module.exports = { AWS };