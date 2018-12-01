var express = require('express');
var router = express.Router();
var delitoController = require("../controllers/delitoController")

router.get("/",delitoController.index);

module.exports=router;