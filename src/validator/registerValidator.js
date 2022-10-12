const {check, body} = require('express-validator');
const {loadUsers} = require('../data/db_Module');

module.exports = [
    check('firstName')
        .notEmpty()
        .withMessage('El nombre es obligatorio')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isAlpha('es-ES')
        .withMessage('Solo caracteres alfabéticos'),

    check('lastName')
        .notEmpty()
        .withMessage('El apellido es obligatorio')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isAlpha('es-ES')
        .withMessage('Solo caracteres alfabéticos'),

    check('phone')
        .notEmpty()
        .withMessage('El número teléfonico es obligatorio')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isNumeric()
        .withMessage('Solo caracteres númericos'),

    body('email')
        .notEmpty()
        .withMessage('El email es obligatorio')
        .bail()
        .isEmail()
        .withMessage('Debe ser un email válido')
        .bail()
        .custom((value, {req}) => {
            const user = loadUsers().find(user => user.email === value);

            if(user){
                return false
            }else {
                return true
            }
        }).withMessage('El email ya se encuentra registrado'),
        
    check('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria')
        .bail()
        .isLength({
            min : 6, 
            max : 12
        }).withMessage('La contraseña debe tener entre 6 y 12 caracteres')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }
            return true
        }),

    body('password2')
        .notEmpty()
        .withMessage('Debes confirmar la contraseña')
        .bail()
       
        .withMessage('Las contraseñas no coinciden'),
    
    check('direction')
        .notEmpty()
        .withMessage('La dirección es obligatoria')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isAlpha('es-ES')
        .withMessage('Solo caracteres alfabéticos'),

    check('heigth')
        .notEmpty()
        .withMessage('La altura es obligatoria')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isNumeric()
        .withMessage('Solo caracteres númericos'),

    check('location')
        .notEmpty()
        .withMessage('La localidad es obligatoria')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isAlpha('es-ES')
        .withMessage('Solo caracteres alfabéticos'),

    check('province')
        .notEmpty()
        .withMessage('La provincia es obligatoria')
        .bail()
        .isLength({
            min : 2
        }).withMessage('Mínimo 2 caracteres')
        .bail()
        .isAlpha('es-ES')
        .withMessage('Solo caracteres alfabéticos'),
    
]