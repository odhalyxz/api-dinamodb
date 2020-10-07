const { DynamoDB } = require('../lib/libdynamodb') ;
const UsersService = {};
const table = 'Users';


UsersService.createUser = async (userData) => {
    
    try {
        let hashedPassword = await bcrypt.hash(password, 10);
        let createUserId = await DynamoDB.addItem({table,userData})
        return createUserId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

UsersService.deleteUser = async ({userData}) => {
    
    try {
        let createUserId = await db.DynamoDB.addItem({table,userData});
        return createUserId;
    } catch (error) {
        console.log(error);
        return error;
    }
};

module.exports = { UsersService };