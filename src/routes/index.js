var express = require('express');
const {index} = require('../controllers/indexControllers');
var router = express.Router();


/* GET home page. */
router
      .get("/",index)
module.exports = router;
