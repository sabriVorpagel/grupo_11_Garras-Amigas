const express = require('express');
const router = express.Router();
const {getUsers, getOne, getAvatar} = require('../../controllers/api/apiUsersController')
const {checkToken} = require ('../../middlewares/checkToken');
router
    .get('/list',checkToken, getUsers)
    .get('/:id', checkToken,getOne)
    .get('/avatar/:avatar',checkToken ,getAvatar)
    

module.exports = router;