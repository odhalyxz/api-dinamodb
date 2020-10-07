const  { UsersService } = require('../services/users');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const saltRounds = 10;
const UserController = {}

UserController.newUser = async (req,res) => {
    
    let { username, email, password , isAdmin, IsActive} = req.body;
    let  hashedPassword = await bcrypt.hash(password, saltRounds);
    let data = {
        'id': uuidv4(),
        username,
        email,
        'password':hashedPassword,
        isAdmin ,
        IsActive
        
    };
    console.log("DATA DESDE CONTROLLERS",data);
    
    try {
        //const createdUser = await UsersService.createUser(data);
        res.status(201).json({
          data: data,
          message: "User created"
        });
    } catch (err) {
        next(err);
    }

}
UserController.deleteUser = async (req,res) => {
    console.log("REQ.boyd",req.body);
    return res.json({hola:'hola'});

}

module.exports = {UserController}