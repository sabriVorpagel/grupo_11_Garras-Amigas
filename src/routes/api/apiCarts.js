const express = require('express');
const router = express.Router();


const {list, addItem, removeItem,removeQuantity} = require('../../controllers/api/apiCartsController');


router 
    .get('/', list)
    .post('/', addItem)
    .delete('/:id', removeQuantity)
    // .delete('/all', removeItem)


module.exports = router;