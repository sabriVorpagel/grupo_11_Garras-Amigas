const db = require('../../database/models');
const path = require('path');
const {loadProducts, storeProducts}= require('../../data/db_Module');
//const{sendSequelizeError}= require('../../helpers')
const  {literal} = require('sequelize');

module.exports = {
    list: async (req, res) => {
        let {limit = 4, page = 1, order = 'ASC', sortBy = 'id', search = "", sale = 0} = req.query;
            limit = limit > 10 ? 10 : +limit;
            let offset = +limit * (+page - 1 );
            let total = await db.Product.count() 
        try {
                let options = {
                attributes : {
                    exclude : ['createdAt', 'updatedAt', 'delatedAt'],
                    include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/products/product', Product.id)`), 'url']]
                },
                include : [
                    {
                        association : 'images',
                        attributes : {
                            exclude : ['createdAt', 'updateAt', 'deleteAt', 'id', 'file', 'productId'],
                            include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/api/products/image/',file)`), 'url']]
                        }
                    },
                    {
                        association :'category',
                        attributes : ['name'],
                    }
                ],
                limit ,
                offset
            }
            const {count, rows : products} = await db.Product.findAndCountAll(options);
            // console.log({products});
            const queryKeys = {
                limit,
                order,
                sortBy,
                search,
                sale
            }
            const existPrev = page > 1;
            const existNext = offset + limit < count;
            let queryUrl = "";
            for (const key in queryKeys) {
                queryUrl += `&${key}=${queryKeys[key]}`
            }
            const prev =  existPrev ? `${req.protocol}://${req.get('host')}${req.baseUrl}?page=${page - 1}${queryUrl}` : null;
            const next = existNext ? `${req.protocol}://${req.get('host')}${req.baseUrl}?page=${page + 1}${queryUrl}` : null;
            return res.status(200).json({
                ok: true,
                meta : {
                    total : count,
                    quantity : products.length,
                    page,
                    prev,
                    next
                },
                data: {
                    total,
                    products
                }
                
            })
            // de donde viene el products de data
        } catch (error) {
            //let errors = sendSequelizeError(error);
            return res.status(error.status || 500).json ({
                ok: false,
                error
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
                            include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/api/products/image/',file)`), 'imageURL']]
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
            //let errors = sendSequelizeError(error);
            
            return res.status(error.status || 500).json ({
                ok: false,
                error,
            });
            
        }
        
    },

    getImage : async (req, res) => {
        return res.sendFile(path.join(__dirname, `../../../public/images/productos/${req.params.image}`))
    }
}