module.exports = {
<<<<<<< HEAD
    detail: (req,res) => {
        return res.render('productDetail')
=======
    productDetail: (req,res) => {
        return res.render('products/productDetail')
    },
    productCart :(req,res) => {
        return res.render('products/productCart')
>>>>>>> c072c8be55bd9c936d6cc3d9e50b9d65cf0e3f66
    }
}