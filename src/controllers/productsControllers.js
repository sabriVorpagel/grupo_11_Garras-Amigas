const {loadProducts, storeProducts, loadCategorys, loadClass} = require('../data/db_Module');
const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    product: (req, res) => { 
        const products = loadProducts();
        return res.render('products/products', {
            products,
            toThousand,}) 
    },
    detail: (req,res) => {
        const products = loadProducts();
        const product = products.find(product => product.id === +req.params.id);
        return res.render('products/productDetail' ,{
            product,
            toThousand
        })
    },
    cart: (req,res) => {
        return res.render('products/productCart')
    },
    
}


