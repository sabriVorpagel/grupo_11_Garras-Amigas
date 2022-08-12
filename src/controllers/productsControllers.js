module.exports = {
    productDetail: (req,res) => {
        return res.render('products/productDetail')
    },
    productCart: (req,res) => {
        return res.render('products/productCart')
    },
    productEdit: (req, res) => {
        return res.render('products/productEdit')
    },
    productCreate: (req, res) => {
        return res.render('products/productCreate')
    }
}