const express = require('express');
const router = express.Router();

const {productDetail, productCart, productCreate, productEdit} = require('../controllers/productsControllers');

/* /products */

router
    .get('/detail', productDetail)
    .get('/cart', productCart)
    .get('/create', productCreate)
    .get('/edit', productEdit)

module.exports = router;