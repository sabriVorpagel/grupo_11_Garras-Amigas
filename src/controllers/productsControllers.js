const {loadProducts, storeProducts, loadCategorys, loadClass} = require('../data/db_Module')
const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    product: (req, res) => { 
		let products = db.Product.findAll({
			include : ['images']
		})

		Promise.all([products])
			.then(([products]) => res.render('products/products', {
				products,
				toThousand
			}))
			.catch(error => console.log(error))
    },
    detail: (req,res) => {
		db.Product.findByPk(req.params.id,{
			include : [{all : true}]
		})
			.then(product => {
				return res.render('products/productDetail', {
			product,
			toThousand
			})
			})
			.catch(error => console.log(error))
    },
    cart: (req,res) => {
		db.Cart.findAll()
		.then(cart =>
			res.render('products/productCart', {cart}))
		.catch(error => console.log(error))
    },
}


