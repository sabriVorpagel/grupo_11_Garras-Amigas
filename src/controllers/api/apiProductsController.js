const db = require('../../database/models');
const path = require('path');
const {loadProducts, storeProducts}= require('../../data/db_Module');
//const{sendSequelizeError}= require('../../helpers')
const  {literal} = require('sequelize');

module.exports = {
    list: async (req, res) => {
        try {
            let {limit} = req.query; 
            let options = {
                attributes : {
                    exclude : ['createdAt', 'updatedAt', 'delatedAt'],
                    include : [ [literal(`CONCAT('${req.protocol}://${req.get('host')}/products/',Product.id)`), 'url']]
                },
                include : [
                    {
                        association : 'images',
                        attributes : {
                            exclude : ['createdAt', 'updateAt', 'deleteAt', 'id', 'file', 'productId'],
                            include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/products/image',file)`), 'url']]
                        }
                    },
                    {
                        association :'category',
                        attributes : ['name'],
                    }
                ],
                limit : +limit || 4
            }
            const {count, rows : products} = await db.Product.findAndCountAll(options);

            return res.status(200).json({
                ok: true, 
                meta : {
                    total : count,
                    quantity : products.length
                },
                data: products  
            
            })
            // de donde viene el products de data
        
        } catch (error) {
            let errors = sendSequelizeError(error);
            
            return res.status(error.status || 500).json ({
                ok: false,
                errors,
            });
        }
    },
    //Detalle del producto
    detail: async (req, res) => {
        try {
            const {id}= req.params;
            const options = {
                include : [
                    {
                        association : 'images',
                        attributes : {
                            exclude : ['createdAt', 'updateAt', 'deleteAt', 'id', 'file', 'productId'],
                            include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/products/image',file)`), 'imageURL']]
                        }
                    },
                    {
                        association : 'category',
                        attributes :['name']
                    }
                ]
            }
            const product = await db.Product.findByPk( id, options);

            return res.status(200).json({
                ok: true, 
                data: product  
            
            })
        } catch (error) {
            let errors = sendSequelizeError(error);
            
            return res.status(error.status || 500).json ({
                ok: false,
                errors,
            });
            
        }
        
    },

    getImage : async (req, res) => {
        return res.sendFile(path.join(__dirname, '..','..','public','images','products', req.params.image))
    }
}
