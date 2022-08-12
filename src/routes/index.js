var express = require('express');
const {index} = require('../controllers/indexControllers');
const {productDetail,productCart} = require('../controllers/productsControllers');
const {login,register}= require('../controllers/usersConstrolers') 
var router = express.Router();

/* GET home page. */
router
.get("/",index)
.get('/productsDetail',productDetail)
.get('/productsCart', productCart)
.get('/login',login)
.get('/register',register)


module.exports = router;
