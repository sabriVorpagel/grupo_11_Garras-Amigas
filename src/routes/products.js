const express = require('express');
const router = express.Router();
const {edit, store, update, create, destroy } = require('../controllers/adminController')
const { product,detail, cart} = require('../controllers/productsControllers');
const adminCheck = require('../middlewares/adminUserCheck');
const privateRoute = require('../middlewares/privateRoute');
/* /products */

router
    .get('/product', product)
    /*** GET ONE PRODUCT ***/ 
    .get('/detail/:id', detail)
    /*** GET CART ***/ 
    .get('/cart',privateRoute, cart)
    /*** CREATE ONE PRODUCT ***/
    .get('/create',adminCheck, create)
    .post('/create',store)
    /*** EDIT ONE PRODUCT ***/ 
    .get('/edit/:id',adminCheck, edit)
    .put('/update/:id', update)
    /*** DELETE ONE PRODUCT***/ 
    .delete('/delete/:id',adminCheck, destroy)
module.exports = router;