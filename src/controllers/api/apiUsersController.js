const db = require('../../database/models');
const path = require('path');
const {Op} = require("sequelize");



module.exports = {
    // deveulve todos los usuarios
    getUsers : async (req,res)=>{
        const {limit, order , search, offset} = req.query;
        // let fields = ["id", "name" , "surname", "email", "password", "avatar"]; //lo que quiero traer
        
        try {
            let total = await db.User.count()  // count devuelve una cantidad
            let users = await db.User.findAll({
                attributes:[
                    "id",
                    "name",
                    "surname",
                    "email",
                    "phone",
                    "street",
                    "height",
                    "city",
                    "province",
                ],
                limit : limit ? +limit : 5,
                offset: offset? +offset :0,   // traigo las paginas
                order : [order? order : 'id'] // coloca por order alfabetico la lista 
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
                throw createError(400, 'El Id debe ser un número');
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
    getAvatar : async (req,res)=>{
        res.sendFile(
        path.join(__dirname, `../../public/images/users/${req.params.avatar}`)
    );
    },
   
}
// const getApiProduct = async (req, res) => {
//     //  return res.send('geApiProducts')
//     try {
//       const product = await db.Product.findByPk(req.params.id, {
//         attributes: {
//           exclude: ["createdAt", "updatedAt", "deletedAt"],
//         },
//       });
//       res.status(200).json({
//         meta: {
//           ok: true,
//           status: 200,
//           //  count: product ,//count: Devuelve el número total de objetos de una colección de propiedades del elemento web.
//         },
//         data: { product },
//       });
//     } catch (error) {
//       return res.status(500).json({
//         ok: false,
//         status: 500,
//         msg: "comuniquese con el Administrador del sitio",
//       });
//     }
//   };

