const express = require('express');
const router = express.Router();

const {productDetail, productCart} = require('../controllers/productsControllers');

/* /products */

router.get('/productDetail', productDetail)

module.exports = router;