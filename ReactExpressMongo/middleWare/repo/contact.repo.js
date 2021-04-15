const dbUrl = require('../conf/config').DB_URL;
const mongoose = require('mongoose');
const Contact = require('./contact.model');

mongoose.Promise=global.Promise;

mongoose.connect(dbUrl,{useNewUrlParser:true})
.then(()=>{
    console.log("Connected to mongodb server...!");
})
.catch((err)=>{
    console.log(`Failed to Connected to mongodb server: ${err}`);
    process.exit();
});

exports.create = (data,onCompleteCB,onErrCB) =>{
    let contact = new Contact(data);
    contact.save()
    .then(onCompleteCB)
    .catch(onErrCB);
};

exports.findAll = (onCompleteCB,onErrCB) =>{
    Contact.find()
    .then(onCompleteCB)
    .catch(onErrCB);
};

exports.findById = (id,onCompleteCB,onErrCB) =>{
    Contact.findById(id)
    .then(onCompleteCB)
    .catch(onErrCB);
};

exports.update = (data,onCompleteCB,onErrCB) =>{
    Contact.findByIdAndUpdate(data._Id,data,{new:true})
    .then(onCompleteCB)
    .catch(onErrCB);
};

exports.delete = (id,onCompleteCB,onErrCB) =>{
    Contact.findByIdAndRemove(id)
    .then(onCompleteCB)
    .catch(onErrCB);
};