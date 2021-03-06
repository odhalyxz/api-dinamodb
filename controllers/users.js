const  { UsersService } = require('../services/users');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const saltRounds = 10;
const UserController = {};

UserController.newUser = async (req,res) => {
    
    let { username, email, password , isAdmin, isActive} = req.body;
    let  hashedPassword = await bcrypt.hash(password, saltRounds);
    let data = {
        'id': uuidv4(),
        username,
        email,
        'password':hashedPassword,
        isAdmin ,
        isActive
        
    };
    
    try {
        let createdUser = await UsersService.createUser(data);
        res.status(201).json({
          data: createdUser,
          message: "User created"
        });
    } catch (err) {
        next(err);
    }

}
UserController.getUser = async (req,res) => {

    let  email = req.body;
    
    try {
        let getUser = await UsersService.getUser(email);
        res.status(201).json({
            data: getUser,
            message: "User created"
          });
    } catch (error) {
        next(err);
    }

};

module.exports = { UserController }