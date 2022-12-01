const express = require('express');
const router = express.Router();
const {list} = require('../../controllers/api/apiUsersController')

router
    .get('/list', list)













module.exports = router;