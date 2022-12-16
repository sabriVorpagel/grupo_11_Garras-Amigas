const express = require('express');
const router = express.Router();
const {getUsers, getOne, getAvatar} = require('../../controllers/api/apiUsersController')

router
    .get('/list', getUsers)

    .get('/:id', getOne)
    .get('/avatar/:avatar',getAvatar)

    

module.exports = router;