const {check, body} = require('express-validator');
const db = require('../database/models');
module.exports = [
    check('name')
        .notEmpty()
        .withMessage('El nombre es obligatorio'),
    check('surname')
        .notEmpty()
        .withMessage('El apellido es obligatorio'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Debe ser un email válido')
        .custom( (value,{req}) => {
          return db.User.findOne({
            where : {
                email : value
            }
          }).then(user => {
                if(user) {
                    return Promise.reject()
                }
          }).catch( () => Promise.reject('El email ya se encuentra registrado'))
        })
        ,
    check('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria'),
    body('password2')
        .notEmpty()
        .withMessage('Reingresá tu contraseña').bail()
        .custom( (value, {req}) => {
            return req.body.password !== value ? false : true
        }).withMessage('Las contraseñas no coinciden'),
    // check('terms')
    //     .isString('on')
    //     .withMessage('Debes aceptar las bases y condiciones'),
    ]