const UsersService = {}
const DynamoDB = require('../lib/libdynamodb');

const table = 'Users';

UsersService.createUser = async ({userData}) => {
    
    try {
        let createUserId = await DynamoDB.createUser({table,userData});
        return createUserId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

UsersService.deleteUser = async ({userData}) => {
    
    try {
        let createUserId = await DynamoDB.createUser({table,userData});
        return createUserId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { UsersService };