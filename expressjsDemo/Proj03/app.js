var express = require('express');
var bp = require('body-parser');

let app = express();

app.use((req,res,next)=>{
    console.log((new Date())+": "+req.url);
    next();
});

app.use(bp.json());

app.get("/",(req,res)=>{
    res.send("This is the root request");
});

app.get("/entities",(req,res)=>{
    res.send("Entities Request Received");
});

app.get("/entities/:name([A-Za-z]+)",(req,res)=>{
    let name = req.params.name;
    res.send(`Name: ${name} is received as path param`);
});

app.get("/entities/:mno([0-9]{10})",(req,res)=>{
    let mno = req.params.mno;
    res.send(`MNO: ${mno} is received as path param`);
});

app.get("/entities/:id",(req,res)=>{
    let id = req.params.id;
    res.send(`ID: ${id} is received as path param`);
});

app.get("*",(req,res)=>{
    res.send(`Sorry! Nobody at this address to answer!`);
});

app.listen(9898,()=>{
    console.log("Server Ready at 9898");
})