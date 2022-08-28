var express = require('express');
var router = express.Router();

const {login,register,edit,update} = require('../controllers/usersConstrollers')

/* /users */
router
  .get('/register',register) 
  .get('/login',login) 
  .get('/edit', edit)
  // .put('/update/:id',update)
  

module.exports = router;