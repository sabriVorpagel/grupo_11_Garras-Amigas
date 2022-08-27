const express = require('express');
const router = express.Router();

const {detail, cart, create, edit} = require('../controllers/productsControllers');

/* /products */

router
    .get('/detail/:id', detail)
    .get('/cart', cart)
    .get('/create', create)
    .get('/edit', edit)

module.exports = router;