const {check, body} = require('express-validator');
const db = require('../database/models');
module.exports = [
    check('name')
        .notEmpty()
        // .isLength({
        //     min: 2
        // }).withMessage('Minimo de dos caracteres (BE)')
        .withMessage('El nombre es obligatorio(BE)'),
    check('surname')
        .notEmpty()
        // .isLength({
        //     min: 2
        // }).withMessage('Minimo de dos caracteres (BE)')
        .withMessage('El apellido es obligatorio (BE)'),
    body('email')
        .notEmpty().withMessage('El email es obligatorio (BE)').bail()
        .isEmail().withMessage('Debe ser un email válido (BE)')
        .custom( (value,{req}) => {
          return db.User.findOne({
            where : {
                email : value
            }
          }).then(user => {
                if(user) {
                    return Promise.reject()
                }
          }).catch( () => Promise.reject('El email ya se encuentra registrado (BE)'))
        })
        ,
    check('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria (BE)'),
    body('password2')
        .notEmpty()
        .withMessage('Reingresá tu contraseña (BE)').bail()
        .custom( (value, {req}) => {
            return req.body.password !== value ? false : true
        }).withMessage('Las contraseñas no coinciden (BE)'),
    check('street')
        .notEmpty()
        .withMessage('El domicilio es obligatorio (BE)'),
    check('phone')
        .notEmpty()
        .withMessage('El número teléfonico es obligatorio (BE)')
        .isNumeric({
            no_symbols: true,
        }).withMessage('Debe ser un número entero positivo (BE)'),
    
    ]