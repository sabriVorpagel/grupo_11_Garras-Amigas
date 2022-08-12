const express = require('express');
const router = express.Router();

const {detail} = require('../controllers/productsControllers');

/* /products */

router.get('/productDetail',detail)

module.exports = router;