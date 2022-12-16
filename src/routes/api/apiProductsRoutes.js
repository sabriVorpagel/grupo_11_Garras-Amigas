const express = require('express');
const router = express.Router();
const {list, detail, getImage } = require('../../controllers/api/apiProductsController')

router
    .get('/', list)
    /*** GET ONE PRODUCT ***/ 
    .get('/:id', detail)
    /***GET IMAGES ***/
    .get('/image/:image', getImage)













module.exports = router;