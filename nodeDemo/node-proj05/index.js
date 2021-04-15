var express = require("express");
var controllers = require("./controllers/myController");
var htmlCtrl = require("./controllers/htmlController");

const PORT = 7777;

var app = express();

app.use((req,resp,next)=>{
    console.log(req.url + " received");
    next();
});

app.get("/",controllers.rootHandler);
app.get("/*.htm",htmlCtrl.htmlPageHandler);
app.get("/greet",controllers.greetHandler);

app.listen(PORT,()=>{
    console.log(`The server is ready @ ${PORT}`);
});