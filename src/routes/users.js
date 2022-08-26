var express = require('express');
var router = express.Router();

const {login,register} = require('../controllers/usersConstrollers')

/* /users */
router
  .get('/register',register) // /users/register
  .get('/login',login) // /users/login
  // .get('/edit/:id', edit)
  

module.exports = router;