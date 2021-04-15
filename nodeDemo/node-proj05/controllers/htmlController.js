var fs = require('fs');

exports.htmlPageHandler = (req,resp)=>{
    var fileName = "./public" + req.url;
    fs.readFile(fileName,"utf8",(err,data)=>{
        if(err){
            console.log(err);
            resp.status(404);
            resp.end();
        }else{
            resp.status(200);
            resp.send(data.toString());
        }
    });
}