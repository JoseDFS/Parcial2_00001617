var express = require('express');
var router = express.Router();
var delitoController = require("../controllers/delitoController")

router.get("/",delitoController.index);
router.post("/",delitoController.store);
router.get("/:id",delitoController.find);
router.delete("/:id",delitoController.del);
router.put("/:id",delitoController.up);
module.exports=router;