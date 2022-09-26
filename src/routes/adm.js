const express = require('express');
var router = express.Router();
const multer = require ('multer');
const {admin, loginAdm, detailAdm, create, store, edit, update, remove } = require('../controllers/admControllers');

const adminCheck = require ('../middlewares/adminCheck');
const publicRoute= require('../middlewares/publicRoute');


router
    .get('/admin', adminCheck, admin)
    .get('/loginAdm', publicRoute, loginAdm)

    .get('/detailAdm/:id',adminCheck, detailAdm)

    .get('/create', adminCheck, create)
    .post('/create', adminCheck, store)
    /*** EDIT ONE PRODUCT ***/ 
    .get('/edit/:id', adminCheck, edit)
    .put('/update/:id', adminCheck, update)
    /*** DELETE ONE PRODUCT***/ 
    .delete('/delete/:id', adminCheck, remove)

module.exports = router;
