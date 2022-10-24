const {loadProducts, storeProducts, loadCategorys, loadClass} = require('../data/db_Module')
const db = require('../database/models')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    product: (req, res) => { 
		let products = db.Product.findAll({
			include : 'images'
		})

		Promise.all([products])
			.then(([products]) => res.render('products/products', {
				products,
				toThousand
			}))
			.catch(error => console.log(error))
        //const products = loadProducts();
        //return res.render('products/products', {
        //    products,
        //    toThousand,}) 
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
        //const products = loadProducts();
        //const product = products.find(product => product.id === +req.params.id);
        //return res.render('products/productDetail' ,{
        //    product,
        //    toThousand
        //})
    },
    cart: (req,res) => {
        return res.render('products/productCart')
    },
    edit: (req, res) => {
		const products = loadProducts();
		const categorys = loadCategorys();
		const subCategorys = loadClass();
        const product = products.find(product => product.id === +req.params.id);
		return res.render('products/productEdit', {
			categorys,
			subCategorys,
			product
		})
    },
	update: (req, res) =>{
		const products = loadProducts();
		const {id} = req.params;
		const {name, price, discount, description, subCategory, category, stock} = req.body;
		const produtsModify = products.map(product => {
			if(product.id === +id){
				return {
					...product,
					name: name.trim(),
					price: +price,
					discount: +discount,
					subCategory,
					category,
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
		db.Category.findAll({
			order : ['name']
		})
			.then(categories => {
				return res.render('products/productCreate', {
					categories
				})
			})
			.catch(error => console.log(error))
		//const categorys = loadCategorys();
		//const subCategorys = loadClass();
        //return res.render('products/productCreate',{
		//	categorys: categorys.sort(),
		//	subCategorys: subCategorys.sort()
		//})
    },
	store: (req,res) =>{
		const {name, price,stock,discount, description, category} = req.body;

		db.Product.create({
			name : name.trim(),
			price,
			discount,
			stock,
			description,
			categoryId : category
		})
			.then(product => {
				return res.redirect('/products/detail/' + product.id)
			})
			.catch(error => console.log(error))
		//const products = loadProducts();
		//const {name, price, discount, description, subCategory, category, stock} = req.body;
		//const id = products[products.length - 1].id;
		//const newProduct ={
		//	id: id +1,
		//	...req.body,
		//	name: name.trim(),
		//	price: +price,
		//	discount: +discount,
		//	stock: +stock,
		//	image: "Correa.jpeg",
		//	description,
		//	subCategory,
		//	category
		//}
		//const productsNew = [...products, newProduct];
		//storeProducts(productsNew);
		//return res.redirect('/products/product')
	},
	remove: (req, res) => {
		const products = loadProducts();
		const productsModify = products.filter(product => product.id !== +req.params.id);
		storeProducts(productsModify);
		return res.redirect('/products/product')
	}
}


