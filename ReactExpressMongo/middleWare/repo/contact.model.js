const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:String,
    mail:String
});

module.exports=mongoose.model('Contact',ContactSchema);