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
    edit: (req, res) => {
		const products = loadProducts();
		const categorias = loadCategorys();
		const clases = loadClass();
        const product = products.find(product => product.id === +req.params.id);
		return res.render('products/productEdit', {
			categorias,
			clases,
			product
		})
    },
	update: (req, res) =>{
		const products = loadProducts();
		const {id} = req.params;
		const {name, price, discount, description, clases, categorias, stock} = req.body;
		const produtsModify = products.map(product => {
			if(product.id === +id){
				return {
					...product,
					name: name.trim(),
					price: +price,
					discount: +discount,
					clases,
					categorias,
					stock: +stock,
					description
				}
			}
			return product
		})
		storeProducts(produtsModify);

		return res.redirect('/products/detail/' + req.params.id)
	},
    // Create - Form to create
    create: (req, res) => {
		const categorias = loadCategorys();
		const clases = loadClass();
        return res.render('products/productCreate',{
			categorias: categorias.sort(),
			clases: clases.sort()
		})
    },
	store: (req,res) =>{
		const products = loadProducts();
		const {name, price, discount, description, clases, categorias, stock} = req.body;
		const id = products[products.length - 1].id;
		const newProduct ={
			id: id +1,
			...req.body,
			name: name.trim(),
			price: +price,
			discount: +discount,
			image: "Correa.jpeg",
			description,
			clases,
			categorias
		}
		const productsNew = [...products, newProduct];
		storeProducts(productsNew);
		return res.redirect('/products/product')
	},
	remove: (req, res) => {
		const products = loadProducts();
		const productsModify = products.filter(product => product.id !== +req.params.id);
		storeProducts(productsModify);
		return res.redirect('/products/product')
	}
}


