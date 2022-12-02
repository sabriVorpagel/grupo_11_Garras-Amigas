const db = require('../../database/models');
const path = require('path');
const { literal} = require('sequelize');




module.exports = {
    // deveulve todos los usuarios
    getUsers : async (req,res)=>{
        // const {limit, order , search, offset} = req.query;
        
        try {
            let {limit = 4, page = 1, order = 'ASC', offset} = req.query;

			// paginación
			limit = limit > 5? 5 : +limit;
			page = +page;
			offset = +limit * (+page - 1);
            order = ['ASC']
			

            let total = await db.User.count()  // count devuelve una cantidad
            let users = await db.User.findAll({
                attributes:{
                    exclude : ['createdAt','updatedAt', 'deletedAt', 'email','password'],
                    include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/images/users/',avatar)`),'url']]
                },
                   
                      
               
        });

        return res.status(200).json({
            meta: {
                ok: true,
                status: 200
            },
            data: {
                items : users.length,
                total,
                users  // le agrego una nueva propiedad
            }
        });
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json({  // respuesta al cliente
            ok: false,
            status : error.status || 500,
            msg: error.message
        });
    }

    },
    //  deveulve solo un  usuarios
    getOne : async (req,res)=>{
        const {id} = req.params;
        
        try {
            //  creo el error 
            if(isNaN(id)){
                 // cuando no encuentra el id del género
                 let error = new Error('El Id debe ser un número');
                 error.status = 400;
                 // arrojo el error
                throw error;
            }

            let user = await db.User.findByPk(id,{
                attributes: {
                    exclude: ["createdAt", "updatedAt", "deletedAt"],
                },
            });


            // validación
            if(!user){
                 // cuando no encuentra el id del género
                let error = new Error('No se encuentre un género con ese ID');
                error.status = 404;
                // arrojo el error
                throw error
            }
            // si se encuntra el género envia una respuesta
            return res.status(200).json({
                    ok: true,
                    meta: {
                        status : 200
                    },
                    data: {
                        user,
                        total : 1
                    }
                })
        } catch (error) {
            console.log(error)
            return res.status(error.status || 500).json({
                ok: false,
                msg: error.message,
            })
        }
    },
    // devuleve imagen de perfil
    // getAvatar : async (req,res)=>{
    //     res.sendFile(
    //     path.join(__dirname, `../../../public/images/users/${req.params.img}`)
    // );
    // },
    getAvatar : async (req,res) => {
		return res.sendFile(
            path.join(__dirname, `../../../public/images/users/${req.params.Images}`));

	},
   
}
list: async (req, res) => {

		try {

			let {limit = 4, page = 1, order = 'ASC', sortBy = 'id', search = "", sale = 0} = req.query;

			/* paginación */
			limit = limit > 16 ? 16 : +limit;
			page = +page;
			let offset = +limit * (+page - 1);

			/* ordenamiento */
			order = ['ASC','DESC'].includes(order.toUpperCase()) ? order : 'ASC';
			sortBy =  ['id','name', 'price', 'discount', 'category', 'newest'].includes(sortBy.toLowerCase()) ? sortBy : 'id';

			let orderQuery = sortBy === "category" ? ['category','name',order] : sortBy === "newest" ? ['createdAt', 'DESC'] : [sortBy, order]

			let options = {
				/* subQuery:false, */
				limit,
                distinct: true,
				offset,
				order : [orderQuery],
				include : [
					{
						association : 'images',
						attributes : {
							exclude : ['createdAt','updatedAt', 'deletedAt', 'id', 'file', 'productId'],
							include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/api/products/image/',file)`),'url']]
						},
					},
					{
						association : 'category',
						attributes : ['name','id'],
						
					}
				],
				attributes : {
					exclude : ['updatedAt','deletedAt'],
					include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/products/',Product.id)`),'url']]
				},
				where : {
					[Op.or] : [
						{
							name : {
								[Op.substring] : search
							}
						},
						{
							description : {
								[Op.substring] : search
							}
						},
					/* 	{
							"$category.name$" : {
								[Op.substring] : search
							}
						} */
					],
					[Op.and] : [
						{
							discount : {
								[Op.gte] : sale
							}
						}
					]
				}
				
			
			}

			const {count, rows : products} = await db.Product.findAndCountAll(options);


			const queryKeys = {
				limit,
				order,
				sortBy,
				search,
				sale
			}

			let queryUrl = "";

			for (const key in queryKeys) {

				queryUrl += `&${key}=${queryKeys[key]}`
			
			}


			const existPrev = page > 1;
			const existNext = offset + limit < count;

			const prev =  existPrev ? `${req.protocol}://${req.get('host')}${req.baseUrl}?page=${page - 1}${queryUrl}` : null;
			const next = existNext ? `${req.protocol}://${req.get('host')}${req.baseUrl}?page=${page + 1}${queryUrl}` : null;

			return res.status(200).json({
				ok : true,
				meta : {
					total : count,
					quantity : products.length,
					page,
					prev, 
					next
				},
				data : products
			})


		} catch (error) {
			let errors = sendSequelizeError(error);

            return res.status(error.status || 500).json({
                ok: false,
                errors,
            });
		}


    }


