const express = require('express');
const router = express.Router();

const { product,detail, cart, create, edit} = require('../controllers/productsControllers');

/* /products */

router
    .get('/product', product)
    .get('/detail/:id', detail)
    .get('/cart', cart)
    .get('/create', create)
    .get('/edit', edit)

module.exports = router;