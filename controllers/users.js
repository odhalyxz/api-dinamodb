const UserController = {}
//const { createUser } = require('../services');

UserController.newUser = async (req,res) => {
    console.log("REQ.boyd",req.body);
    
    return res.json({hola:'hola'});

}
UserController.deleteUser = async (req,res) => {
    console.log("REQ.boyd",req.body);
    return res.json({hola:'hola'});

}

module.exports = {UserController}