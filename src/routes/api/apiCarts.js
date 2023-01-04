const express = require('express');
const router = express.Router();


const {list, addItem, removeItem,removeQuantity,removeAllItems} = require('../../controllers/api/apiCartsController');


router 
    .get('/', list)
    .post('/', addItem)
    .delete('/all',removeAllItems)
    .delete('/:id',removeQuantity)
    .delete('/item/:id',removeItem)


module.exports = router;