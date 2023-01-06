const db = require("../../database/models");
module.exports = {
  list: async (req, res) => {
    let categories = await db.Category.findAll()
    
    try {
        return res.status(200).json({
        ok: true,
        data: categories,
        
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || "Comunicate con el administrador",
      });
    }
  },
};