var express = require('express');
const {index,  inicio} = require('../controllers/indexControllers');
var router = express.Router();


/* GET home page. */
router
      .get("/",inicio)
      .get("/index",index)
module.exports = router;
