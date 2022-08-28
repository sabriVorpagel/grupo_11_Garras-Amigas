const {loadProducts, storeProducts} = require('../data/db_Module');
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {

    product: (req, res) => { 
        const products = loadProducts();
        return res.render('products/product', {
            products,
            toThousand,}) 
    },
    detail: (req,res) => {
        const products = loadProducts();
        const product = products.find(product => product.id === +req.params.id);
        return res.render('products/detail' ,{
            product,
            toThousand
        })
    },
    cart: (req,res) => {
        return res.render('products/productCart')
    },
    edit: (req, res) => {
<<<<<<< HEAD
        return res.render('products/registerEdit')
=======
        return res.render('products/productEdit')
>>>>>>> 3f24ad92c7a2fac6565aeb3bbcf4fa6a634bedc5
    },
    create: (req, res) => {
        return res.render('products/productCreate')
    }
}


