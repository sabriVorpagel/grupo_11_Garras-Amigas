var express = require('express');
var router = express.Router();
const multer = require ('multer');

const {login, register, profile, processRegister, processLogin, editProfile, update, logout} = require('../controllers/usersConstrollers');
const {uploadUsers } = require('../middlewares/uploadFiles');
const loginValidator = require('../validator/loginValidator');
const registerValidator = require('../validator/registerValidator');
const publicRoute = require('../middlewares/publicRoute');
const privateRoute = require('../middlewares/privateRoute');
const profileValidator = require( '../validator/editProfileValidator');
/* /users */
router
  .get('/register', publicRoute, register) 
  .post('/register', uploadUsers.single('avatar'), registerValidator, processRegister) 
  .get('/login',publicRoute, login) 
  .post('/login', loginValidator , processLogin)
  .get('/profile',privateRoute, profile)
  .get('/editProfile/:id', privateRoute,  profileValidator, editProfile)
  .put('/update/:id', uploadUsers.single('avatar'), update)
  .get('/logout',logout)

module.exports = router;