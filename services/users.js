const { DynamoDB } = require('../lib/libdynamodb') ;
const UsersService = {};
const table = 'Users';


UsersService.createUser = async (userData) => {
    
    try {
        let params = {
            TableName: table,
            Item: userData
        };
        console.log("data desde servives",params);
        let createUserId = await DynamoDB.addItem(params)
        return createUserId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

UsersService.getUser = async ( keys ) => {
    
    try {
        let params = {
            TableName: table, 
            Key: keys
        }
        console.log("data desde servives",params);
        return await DynamoDB.getItem(params);;
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { UsersService };