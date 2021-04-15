var express = require('express');
var bp = require('body-parser');
var cors = require('cors');
var contactRouter = require("./router/contact.router");

const PORT = require('./conf/config').PORT;

let app = express();

app.use(bp.urlencoded({extended:true}));
app.use(bp.json());
app.use(cors());
app.use("/contacts",contactRouter);

app.listen(PORT,()=>{
    console.log(`AddressBook Express Middleware is running @ ${PORT}`);
});
