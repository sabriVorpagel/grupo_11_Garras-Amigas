var express = require('express');
var router = express.Router();
const {edit, store, update, create, destroy, administrador } = require('../controllers/adminController')


router
    .get("/admi", administrador)

module.exports = router;