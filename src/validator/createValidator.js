const {check} = require('express-validator');
const db = require('../database/models');

module.exports =[
    check('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({
            min: 5
        }).withMessage('Minimo de cinco caracteres'),
    
        check('description')
        .notEmpty().withMessage('La decripcion es obligatorio')
        .isLength({
            min: 20
        }).withMessage('Minimo de veinte caracteres'),
    
        check('category')
        .notEmpty()
        .withMessage('La categoria es obligatorio'),
    
        check('images')
        .notEmpty()
        .withMessage('La imagen es obligatorio'),
    
        check('price')
        .notEmpty().withMessage('El precio es obligatorio')
        .isNumeric({
        no_symbols: true,
    }).withMessage('Debe ser un número entero positivo'),
    
    check('stock')
    .notEmpty().isInt({
        min: 1,
    }).withMessage('Debe ser mayor o igual a uno')
    .isNumeric({
        no_symbols: true,
    }).withMessage('Debe ser un número entero positivo'),
        
    check('discount')
        .notEmpty()
        .isInt({
            min: 0,
            max: 99
        }).withMessage('Descuento entre cero y noventa y nueve').bail()
        .isNumeric({
            no_symbols: true,
        }).withMessage('Debe ser un número entero positivo'),
    
]