const {check} = require('express-validator');
const db = require('../database/models');

module.exports =[ 
    check('name')
        .notEmpty()
        .withMessage('El nombre es obligatorio(BE)'),
    check('surname')
        .notEmpty()
        .withMessage('El apellido es obligatorio (BE)'),
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