const {loadProducts, storeProducts} = require('../data/db_Module');
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    detail: (req,res) => {
        const products = loadProducts();
        const product = products.find(product => product.id === +req.params.id);
        return res.render('/products/detail' ,{
            product,
            toThousand
        })
    },
    cart: (req,res) => {
        return res.render('products/cart')
    },
    edit: (req, res) => {
        return res.render('products/edit')
    },
    create: (req, res) => {
        return res.render('products/create')
    }
}



   