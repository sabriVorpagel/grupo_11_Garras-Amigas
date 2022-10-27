const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const {Op} = require('sequelize');
module.exports = {
  inicio :  (req, res ) => {
    return res.render('inicio.ejs')
  },
  index :  (req, res ) => {
    let productOfertas = db.Product.findAll({
			where: {
				discount: {
					[Op.gte]: 10,
				},
			},
			limit: 4,
			order: [["discount", "DESC"]],
			attributes: {
				exclude: ["createdAt", "updatedAt", "categoryId"],
			},
			include: [
				{
					association: "category",
					attributes: ["id", "name"],
				},
				{
					association: "images",
				},
			],
		});
		let productNovedades = db.Product.findAll({
			order: [["createdAt", "DESC"]],
			limit: 4,
			attributes: {
				exclude: ["updatedAt", "categoryId"],
			},
			include: [
				{
					association: "category",
					attributes: ["id", "name"],
				},
				{
					association: "images",
				},
			],
		});
		let productDestacados = db.Product.findAll({
			order: [["name", "DESC"]],
			limit: 4,
			attributes: {
				exclude: ["updatedAt", "categoryId"],
			},
			include: [
				{
					association: "category",
					attributes: ["id", "name"],
				},
				{
					association: "images",
				},
			],
		});

		Promise.all([productOfertas,productDestacados,productNovedades])
			.then(([productOfertas,productDestacados,productNovedades]) => {
				return res.render("index", {
					productDestacados,
					productNovedades,
					productOfertas,
					toThousand,
				});
			})
			.catch((error) => console.log(error));
	}
};
 


  

