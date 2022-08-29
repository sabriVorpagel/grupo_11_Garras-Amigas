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
        return res.render('products/productDetail' ,{
            product,
            toThousand
        })
    },
    cart: (req,res) => {
        return res.render('products/productCart')
    },
    edit: (req, res) => {
        let productToEdit = loadProducts().find(product => product.id === +req.params.id);
		return res.render('products/productEdit', {
			productToEdit
		})
    },
    // Create - Form to create
    create: (req, res) => {
        return res.render('products/productCreate')
    },
    // Create -  Method to store
    store: (req,res) =>{
        const {name, price, discount, description, category, subCategory, stock } = req.body;
		let products = loadProducts();
		const newProduct = {
			id: products[products.length -1].id +1,
			...req.body,
			name: name,
			price: +price,
			description: description,
			discount: +discount,
			category,
            subCategory,
			stock: +stock,
			image: 'kit-collar.jpeg'
		}
        let productsModify = [...products, newProduct];
		storeProducts(productsModify);

		return res.redirect('/')
    },
    update: (req, res) => {
		// Do the magic
		const {name, price, discount, description, category, subCategory, stock} = req.body;
		let productsModify = loadProducts().map(product => {
			if(product.id === +req.params.id){
				return {
					id: products.id,
					name: name.trim(),
					price: +price,
					description: description.trim(),
					discount: +discount,
                    stock: +stock,
					category,
                    subCategory,
					image: product.image
				}
			}
			return product
		})
		storeProducts(productsModify)
		return res.redirect('/products/product' + req.params.id )
	},
}


