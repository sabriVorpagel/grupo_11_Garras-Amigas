const express = require('express');
const router = express.Router();

const {list,addItem,removeAllItem,removeItem}= require('../../controllers/api/apiCartsController');
const { post } = require('./apiAuth');

//   /api/carts

router
    .get('/', list)
    .post('/', addItem)
    .delete('/:id', removeItem)
    .delete('/all', removeAllItem)

module.exports = router;