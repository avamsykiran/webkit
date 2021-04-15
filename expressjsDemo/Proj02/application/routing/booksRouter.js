var ctrl = require('../controller/booksController');
var router = require('express').Router();

router.get("/",ctrl.defaultGetHandler);

module.exports=router;
