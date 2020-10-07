const { DynamoDB } = require('../lib/libdynamodb') ;
const UsersService = {};
const table = 'Users';


UsersService.createUser = async (userData) => {
    
    try {
        let createUserId = await DynamoDB.addItem({table,userData})
        return createUserId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

UsersService.getUser = async (keys) => {
    
    try {
        //console.log("PARAMS DESDE SERVIVES",keys);
        
        //let createUserId = await DynamoDB.getItem(keys);
        return await DynamoDB.getItem(table, keys );;
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { UsersService };