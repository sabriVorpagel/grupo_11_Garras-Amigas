var express = require('express');
var router = express.Router();
const multer = require ('multer');

const {login, register, profile, processRegister, processLogin, update} = require('../controllers/usersConstrollers');
const {uploadUsers} = require('../middlewares/uploadFiles');
const loginValidator = require('../validator/loginValidator');
const registerValidator = require('../validator/registerValidator')

/* /users */
router
  .get('/register',register) 
  .post('/register', uploadUsers.single('imgUsers'), registerValidator, processRegister) 
  .get('/login',login) 
  .post('/login', processLogin, loginValidator)
  .get('/profile', profile)
  .put('/profile', update)
  

module.exports = router;