var express = require('express');
var router1 = require('./application/routing/defaultrouting');
var booksRouter = require('./application/routing/booksRouter');
var authorsRouter = require('./application/routing/authorsRouter');

const PORT = 4444;

var app =express();

app.use(router1); 
app.use("/books",booksRouter); 
app.use('/authors',authorsRouter);

app.listen(PORT,()=>{
    console.log(`Server initiated @ port: ${PORT}`);
});