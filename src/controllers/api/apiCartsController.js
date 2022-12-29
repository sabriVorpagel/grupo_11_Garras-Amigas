const db = require('../../database/models');

module.exports = {
    list : async (req, res) => {
        try {
            return res.satuts(200).json({
                ok : true,
                data : req.sesssion.orderCart || null
            })
            
        } catch (error) {
            console.log(error);
            return res.status(error.status || 500).json({
                ok : false,
                msg : error.message || "Comunicate con el administrador"
            })
            
        }

    },
    addItem : async (req, res) => { 

    },
    removeItems : async (req, res) => {

    },
    removeAllItems : async (req, res) => {

    },
}