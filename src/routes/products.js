const express = require('express');
const router = express.Router();
const {edit, store, update, create, destroy } = require('../controllers/adminController')
const { product,detail, cart, search} = require('../controllers/productsControllers');
const adminCheck = require('../middlewares/adminUserCheck');
const privateRoute = require('../middlewares/privateRoute');
const editValidator = require('../validator/editValidator');
const {uploadProducts} = require('../middlewares/productImageUpload')
const createValidator = require('../validator/createValidator');
/* /products */

router
    .get('/product', product)
    /*** GET ONE PRODUCT ***/ 
    .get('/detail/:id', detail)
    /*** GET CART ***/ 
    .get('/cart',privateRoute, cart)
    /*** CREATE ONE PRODUCT ***/
    .get('/create',adminCheck, createValidator,create)
    .post('/create',uploadProducts.array('images'), createValidator,store)
    /*** EDIT ONE PRODUCT ***/ 
    .get('/edit/:id',adminCheck, editValidator, edit)
    .put('/update/:id',uploadProducts.array('images'),editValidator, update)
    /*** DELETE ONE PRODUCT***/ 
    .delete('/delete/:id',adminCheck, destroy)
    // Buscador
    .get('/search',search)
module.exports = router;