var express = require('express');
var ctrl1 = require('./application/controller/controller1');
var rout1 = require('./application/routing/defaultrouting');

const PORT = 5656;

var app =express();

rout1.linkRoutes(app,ctrl1);

app.listen(PORT,()=>{
    console.log(`Server initiated @ port: ${PORT}`);
});