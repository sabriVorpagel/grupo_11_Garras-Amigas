const {loadProducts, loadCategorys,loadClass} = require('../data/db_Module');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  index :  (req, res ) => {
    let products = loadProducts();
    let productDestacados= products.filter(product => product.subCategory === "destacados");
    let productNovedades= products.filter(product => product.subCategory === "novedades");
    let productOfertas= products.filter(product => product.subCategory === "ofertas");
      return res.render('index', {
        products,
        toThousand, 
        productDestacados,
        productNovedades,
        productOfertas
    });
  }
}


  

