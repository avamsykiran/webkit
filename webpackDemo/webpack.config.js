var path = require("path");

module.exports={
    entry:'./app/app.js',
    output:{
        filename:"my-app.js",
        path:path.resolve(__dirname,'dist')
    }
};