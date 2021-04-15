const ctrl = require("../controller/contact.controller");

var router = require("express").Router();

router.get("/",ctrl.findAll);

router.get("/:id",ctrl.findById);

router.post("/",ctrl.create);

router.put("/",ctrl.update);

router.delete("/",ctrl.delete);

module.exports=router;