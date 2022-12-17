const db = require('../database/models');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const { Op } = require("sequelize");

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
		db.Product.findByPk(req.params.id,{
			include : [{all : true}]
		})
			.then(product => {
				return res.render('products/productCart', {
			product,
			toThousand
			})
			})
			.catch(error => console.log(error))
		// db.Cart.findAll()
		// .then(cart =>
		// 	res.render('products/productCart', {cart}))
		// .catch(error => console.log(error))
    },
	search : (req,res) => {
        let { keywords } = req.query;
		db.Product.findAll({
			where: {
				[Op.or]: [
					{
						name: {
							[Op.substring]: keywords,
						},
					},
					{
						description: {
							[Op.substring]: keywords,
						},
					},
				],
			},
			include : ['images']
		})
			.then((result) => {
				console.log(result[0].images[0].file)
				return res.render("products/result", {
					result,
					toThousand,
					keywords,
				});
			})
            .catch(error => console.log(error))
    },
}


