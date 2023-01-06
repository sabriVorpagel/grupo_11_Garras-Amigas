const express = require('express');
const router = express.Router();


const {list} = require('../../controllers/api/apiCategorieController');


router
    .get('/', list)

module.exports = router;