const express = require('express');
const router = express.Router();

const { product,detail, cart, create, edit, store, update, remove} = require('../controllers/productsControllers');
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
    .post('/create', store)
    /*** EDIT ONE PRODUCT ***/ 
    .get('/edit/:id',adminCheck, edit)
    .put('/update/:id', update)
    /*** DELETE ONE PRODUCT***/ 
    .delete('/delete/:id',adminCheck, remove)
module.exports = router;