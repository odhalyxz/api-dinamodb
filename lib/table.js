const {AWS} = require('./dynamodb')
const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
// Para ejecutar : export NODE_ENV=development && node table.js
let params = {
    TableName : "Users",
    KeySchema: [       
        { AttributeName: "id", KeyType: "HASH"}, //Partition key
        { AttributeName: "email", KeyType: "RANGE" }  //Sort key
    ],
    AttributeDefinitions: [       
        { AttributeName: "id", AttributeType: "S" },
        { AttributeName: "email", AttributeType: "S" }
    ],
    ProvisionedThroughput: {       
        ReadCapacityUnits: 1, 
        WriteCapacityUnits: 1
    }
};

ddb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});