const db = require ('../../database/models');

module.exports ={
    list : async ( req,res) => {
        try{

            return res.status(200).json({
                ok: true,
                data : req.session.orderCart || null

            })
        } catch (error){
            console.log(error);
            return res.status(error.status || 500).json({
                ok: false,
                msg : error.message || "Comunicate con el administrador"
            })
        }

    },
    // agregar un producto al carrito
    addItem : async ( req,res) => {

    },
    //  remover un producto al cariito
    removeQuantity : async ( req,res) => {

    },
    //  remover todos los elementos del carrito
    removeAllItems : async ( req,res) => {

    },
    
}