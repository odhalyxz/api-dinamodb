let UserController = {}
let  { UsersService } = require('../services/users')
//const { createUser } = require('../services');

UserController.newUser = async (req,res) => {
    
    // 1. Validacion de los datos acorde a un shema a definir
    // Aqui es donde se va a estructurar  params, para que pueda ser insertado en la DB
    // Se utilizara uuid para generar los ids
    // Crear un shema validatos para los datos
    //crear un json example para guardarlos datos
    let { id, username, email, role , IsActive} = req.body;
    let data = {
        
            id,
            username,
            email,
            role ,
            IsActive
        
    };
    
    try {
        const createdUser = await UsersService.createUser(data);
        res.status(201).json({
          data: createdUser,
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