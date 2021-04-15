var ctrl = require('../controller/authorsController');
var router = require('express').Router();

router.get("/",ctrl.defaultGetHandler);

module.exports=router;
