const express = require('express');
const router = express.Router();

const publicRoute = require('../middlewares/publicRoute');
const privateRoute = require('../middlewares/privateRoute');


const { product,detail, cart} = require('../controllers/productsControllers');

/* /products */

router
    .get('/product',publicRoute, product)
    /*** GET ONE PRODUCT ***/ 
    .get('/detail/:id',publicRoute, detail)
    /*** GET CART ***/ 
    .get('/cart', privateRoute, cart)
    
    
module.exports = router;