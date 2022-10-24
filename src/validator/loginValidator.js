const {check, body }= require('express-validator');
//const{loadUsers}= require('../data/db_Module');
const {compareSync} = require('bcryptjs');
const db = require('../database/models');

module.exports = [

    check('email')
        .notEmpty()
        .withMessage('El email es obligatorio'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria')
        .custom( (value,{req}) => {
            return db.User.findOne({
                where : {
                    email : req.body.email
                }
              }).then( user => {
                    if(!user || !compareSync(value, users.password)) {
                        return Promise.reject()
                    }
              }).catch( () => Promise.reject('Credenciales inválidas'))
        })
    //check('email')
    //    .notEmpty()
    //    .withMessage('El email es obligatorio')
    //    .bail()
    //    .isEmail()
    //    .withMessage('Debe ser un email válido')
    //    .bail(),
    //body('password')
    //    .notEmpty()
    //    .withMessage('La contraseña es obligatoria')
    //    .bail()
    //    .isLength({
    //        min : 6, 
    //        max : 12
    //    }).withMessage('La contraseña debe tener entre 6 y 12 caracteres')
    //    .custom((value, {req}) => {
    //        const user = loadUsers().find(user => user.email === req.body.email.trim() && compareSync(value, user.password) );
    //        
    //        return !user ? false : true
    //        
    //    }).withMessage('Credenciales invalidas'),

]

   