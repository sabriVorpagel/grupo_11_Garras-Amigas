const db = require('../../database/models');
const path = require('path');
const {Op} = require("sequelize");



module.exports = {
    // deveulve todos los usuarios
    list : async (req,res)=>{
        const {limit, order , search, offset} = req.query;
        // let fields = ["id", "name" , "surname", "email", "password", "avatar"]; //lo que quiero traer
        
        try {
            let total = await db.User.count()  // count devuelve una cantidad
            let users = await db.User.findAll({
                attributes:
                {
                    exclude: ['created_at', 'updated_at']
                },
                include : [
                    {
                        association: 'rol',
                        attributes : {
                            exclude : ['created_at', 'updated_at'] // me trae el rol
                        }
                    },
                    {
                        association: 'address', // trae la direccion
                        attributes : {
                            exclude : ['created_at', 'updated_at']
                        },
                    },
                    {
                        association: 'order', // trae la compra
                        attributes : {
                            exclude : ['created_at', 'updated_at']
                        },
                    },
                ],
                
                limit : limit ? +limit : 5,
                offset: offset? +offset :0,   // traigo las paginas
                order : [order? order : 'id'] // coloca por order alfabetico la lista 
        });

        return res.status(200).json({
            ok: true,
            meta: {
                status: 200
            },
            data: {
                items : users.length,
                total,
                users  // le agrego una nueva propiedad
            }
        })
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

    },
    // devuleve imagen de perfil
    getAvatar : async (req,res)=>{

    },
   
}
