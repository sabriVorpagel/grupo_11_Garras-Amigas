var express = require('express');
var router = express.Router();

const {login,register, edit} = require('../controllers/usersConstrolers')

/* /users */
router
  .get('/register',register) // /users/register
  .get('/login',login) // /users/login
  .get('/edit', edit)

module.exports = router;