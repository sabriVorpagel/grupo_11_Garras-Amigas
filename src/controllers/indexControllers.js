const {loadProducts, loadCategorys,loadClass} = require('../data/db_Module');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const {Op} = require('sequelize')
module.exports = {
  inicio :  (req, res ) => {
    return res.render('inicio.ejs')
  },
  index :  (req, res ) => {
	let products = loadProducts();
    let productDestacados= products.filter(product => product.subCategory === "destacados");
    let productNovedades= products.filter(product => product.subCategory === "novedades");
    let productOfertas= products.filter(product => product.subCategory === "ofertas");
      return res.render('index.ejs', {
        products,
        toThousand, 
        productDestacados,
        productNovedades,
        productOfertas
    })
  }
    // let productOfertas = db.Product.findAll({
	// 		where: {
	// 			discount: {
	// 				[Op.gte]: 10,
	// 			},
	// 		},
	// 		limit: 4,
	// 		order: [["discount", "DESC"]],
	// 		attributes: {
	// 			exclude: ["createdAt", "updatedAt", "categoryId"],
	// 		},
	// 		include: [
	// 			{
	// 				association: "category",
	// 				attributes: ["id", "name"],
	// 			},
	// 			{
	// 				association: "images",
	// 			},
	// 		],
	// 	});
		// let productNovedades = db.Product.findAll({
		// 	order: [["createdAt", "DESC"]],
		// 	limit: 4,
		// 	attributes: {
		// 		exclude: ["updatedAt", "categoryId"],
		// 	},
		// 	include: [
		// 		{
		// 			association: "category",
		// 			attributes: ["id", "name"],
		// 		},
		// 		{
		// 			association: "images",
		// 		},
		// 	],
		// });
		// let productDestacados = db.Product.findAll({
		//	order: [["name", "DESC"]],
		// 	limit: 4,
		// 	attributes: {
		// 		exclude: ["updatedAt", "categoryId"],
		// 	},
		// 	include: [
		// 		{
		// 			association: "category",
		// 			attributes: ["id", "name"],
		// 		},
		// 		{
		// 			association: "images",
		// 		},
		// 	],
		// });

	// 	Promise.all([ productOfertas])
	// 		.then(([ productOfertas]) => {
	// 			return res.render("index", {
	// 				productDestacados,
	// 				productNovedades,
	// 				productOfertas,
	// 				toThousand,
	// 			});
	// 		})
	// 		.catch((error) => console.log(error));
	// }
};
 


  

