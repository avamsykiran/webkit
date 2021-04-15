const PORT = 7878;

var express = require("express");
var bp = require("body-parser");
var bc = require("./booksApp/controller/booksController");

var app = express();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.get("/books",bc.defaultGetHandler);
app.get("/books/:id",bc.getByIdHandler);
app.post("/books",bc.createBookHandler);
app.put("/books",bc.modifyBookHandler);
app.delete("/books/:id",bc.deleteByIdHandler);

app.listen(PORT,()=>{
    console.log(`Server launched on port#${PORT}`);
});