const express = require('express');
const router = express.Router();

const { product,detail, cart, create, edit, store, update, remove} = require('../controllers/productsControllers');

/* /products */

router
    .get('/product', product)
    /*** GET ONE PRODUCT ***/ 
    .get('/detail/:id', detail)
    /*** GET CART ***/ 
    .get('/cart', cart)
    /*** CREATE ONE PRODUCT ***/
    .get('/create', create)
    .post('/create', store)
    /*** EDIT ONE PRODUCT ***/ 
    .get('/edit/:id', edit)
    .put('/update/:id', update)
    /*** DELETE ONE PRODUCT***/ 
    .delete('/delete/:id', remove)
module.exports = router;