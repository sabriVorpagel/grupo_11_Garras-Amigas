const express = require('express');
const router = express.Router();
const {getUsers, getOne, getAvatar} = require('../../controllers/api/apiUsersController')

router
    .get('/list', getUsers)
<<<<<<< HEAD
    .get('/:id', getOne)
    .get('/avatar/:avatar',getAvatar)
=======
    .get('/:id',getOne)
    .get('/avatar/:avatar' ,getAvatar)
>>>>>>> 411d70f2ea6d3238623b62d8d098fcabd9f2a189
    

module.exports = router;