var express = require('express');
var router = express.Router();

const {login, register, perfil, update} = require('../controllers/usersConstrollers')

/* /users */
router
  .get('/register',register) 
  .get('/login',login) 
  .get('/perfil', perfil)
  // .put('/update/:id',update)
  

module.exports = router;