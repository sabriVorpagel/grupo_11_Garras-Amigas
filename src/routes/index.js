var express = require('express');
const {index} = require('../controllers/indexControllers');
const {productDetail,productCart} = require('../controllers/productsControllers');
const {login,register}= require('../controllers/usersConstrolers') 
var router = express.Router();
const {index} = require('../controllers/indexControllers')

/* GET home page. */
<<<<<<< HEAD
router.get('/', index)
=======
router
.get("/",index)
.get('/productsDetail',productDetail)
.get('/productsCart', productCart)
.get('/login',login)
.get('/register',register)

>>>>>>> c072c8be55bd9c936d6cc3d9e50b9d65cf0e3f66

module.exports = router;
