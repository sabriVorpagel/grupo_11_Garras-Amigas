const express = require('express');
const router = express.Router();


const {list, addItem, removeAllItems,removeItems} = require('../../controllers/api/apiCartsController');


router 
    .get('/', list)
    .post('/', addItem)
    .delete('/:id', removeItems)
    .delete('/all', removeAllItems)


module.exports = router;