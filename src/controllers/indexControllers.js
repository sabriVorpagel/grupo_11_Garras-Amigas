const {loadProducts} = require('../data/db_Module');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  index :  (req, res ) => {
<<<<<<< HEAD
  const products = loadProducts();
=======
    let products = loadProducts();
>>>>>>> 3f24ad92c7a2fac6565aeb3bbcf4fa6a634bedc5
    let productDestacados= products.filter(product => product.subCategory === "destacados");
    let productNovedades= products.filter(product => product.subCategory === "novedades");
    let productOfertas= products.filter(product => product.subCategory === "ofertas");
      return res.render('index', {
        products,
        toThousand, 
        productDestacados,
        productNovedades,
        productOfertas
    })

  }
  }


  

