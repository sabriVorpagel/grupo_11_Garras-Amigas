var express = require('express');
var router = express.Router();
const multer = require ('multer');

const {login, register, profile, processRegister} = require('../controllers/usersConstrollers');
const {uploadUsers} = require('../middlewares/uploadFiles');

/* /users */
router
  .get('/register',register) 
  .post('/register', uploadUsers.single('imgUsers'), processRegister) 
  .get('/login',login) 
  .get('/profile', profile)
 
  

module.exports = router;