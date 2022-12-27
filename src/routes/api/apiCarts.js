const express = require('express');
const router = express.Router();

const {list,addItem,removeAllItems,removeQuantity} = require('../../controllers/aPI/apiCartsController');

// /api/carts

router
    .get('/', list)
    .post('/',addItem)
    .delete('/:id',removeQuantity)
    .delete('/all',removeAllItems)

module.exports = router;
