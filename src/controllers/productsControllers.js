module.exports = {
    detail: (req,res) => {
        return res.render('productDetail')
    },
    productDetail: (req,res) => {
        return res.render('products/productDetail')
    },
    productCart :(req,res) => {
        return res.render('products/productCart')
    }
}