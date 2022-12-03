const db = require('../../database/models');
const path = require('path');
const {literal} = require('sequelize');


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
                    include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/api/users/avatar/',avatar)`),'url']]
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
                attributes:{
                    exclude : ['createdAt','updatedAt', 'deletedAt', 'email','password'],
                    include : [[literal(`CONCAT('${req.protocol}://${req.get('host')}/api/users/avatar/',avatar)`),'url']]
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
    getAvatar : async (req,res) => {
		return res.sendFile(
            path.join(__dirname, `../../../public/images/users/${req.params.avatar}`));

	},
}



