const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const {Op} = require('sequelize')
const {validationResult} = require('express-validator');


module.exports ={
    administrador :  (req, res ) => {
        return res.render('admi.ejs')
    },

    //crear producto sin datos
    create: (req,res) =>{
        let categories = db.Category.findAll({
            order: ['name']
        });
        Promise.all([categories])
        .then(([categories]) =>{
            return res.render('products/productCreate',{
                categories
            })
        })
        .catch(error => console.log(error))
    },
    store: (req,res) =>{
        let errors = validationResult(req);
        let categories = db.Category.findAll();
        
        if(errors.isEmpty()){
            const {name, price, discount, stock, categoryId, images, description} = req.body;

            db.Product.create({
                ...req.body,
                name: name.trim(),
                categoryId: req.body.categoryId,
                images:  req.files ? req.files.filename : 'default.jpg'
            })
            .then(product =>{
                console.log(product)
                return res.redirect('/index')
            })
            .catch(error => console.log('Se ha detectado un error, favor de identificar y resolver '+ error))
        }else{
            Promise.all([categories])
            .then(([categories]) => {
                res.render('products/productCreate',{
                    categories,
                    errors: errors.mapped(),
                    old : req.body
                })
            })
            .catch(error => console.log(error))
        }
    },
    //vista de edit con datos
    edit: (req,res) =>{
        let categories = db.Category.findAll();

        let product = db.Product.findByPk(req.params.id);

        Promise.all([categories, product])
        .then(([categories, product]) => {
            return res.render('products/productEdit',{
                product,
                categories
            })
        })
        .catch(error => console.log('Se detecto un error, revisar por favor'+ error))
    },
    //actualizacion de base de datos
    update: (req,res) =>{
        db.Product.update(
            {
                ...req.body,
                name: req.body.name.trim()
            },
            {
                where: {id:req.params.id}
            }
        )
        .then(result =>{
            console.log(result)
            return res.redirect('/products/detail/' +req.params.id)
        })
        .catch(error => console.log(error))
    },
    //proceso de borrar en base de datos
    destroy: async(req,res) =>{
        let product = await db.Product.findByPk(req.params.id,{
            include: [{all : true}]
        });
        console.log(product)
        let imageId = product.images[0].id;
        console.log('images=',product.images)
        db.Image.destroy({
            where:{
                id: imageId
            }
        })
        db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(result => {
            console.log(result)
            return res.redirect('/index')
        })
    }
}