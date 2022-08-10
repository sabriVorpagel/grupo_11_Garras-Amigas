var express = require('express');
var router = express.Router();

const {login,profile,register} = require('../controllers/usersConstrolers')

/* /users */
router
  .get('/register',register) // /users/register
  .get('/login',login) // /users/login

module.exports = router;