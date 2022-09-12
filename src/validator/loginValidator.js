const {check, body }= require('express-validator');
const{loadUsers}= require('../data/db_Module');
const {compareSync} = require('bcryptjs');

module.exports = [

    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email valido').bail(),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria')
        .custom((value, {req}) => {
            const user = loadUsers().find(user => user.email === req.body.email.trim() && compareSync(value, user.password) );
            
            return !user ? false : true
            
        }).withMessage('Credenciales invalidas'),

]