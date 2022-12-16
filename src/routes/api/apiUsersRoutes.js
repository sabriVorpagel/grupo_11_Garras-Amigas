const express = require('express');
const router = express.Router();
const {getUsers, getOne, getAvatar} = require('../../controllers/api/apiUsersController')
const {checkToken} = require ('../../middlewares/checkToken');
router
    .get('/', getUsers)
    .get('/:id',getOne)
    .get('/avatar/:avatar' ,getAvatar)
    

module.exports = router;