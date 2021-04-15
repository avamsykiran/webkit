var ctrl = require('../controller/controller1');
var router = require('express').Router();

router.get("/",ctrl.defaultGetHandler);

module.exports=router;

