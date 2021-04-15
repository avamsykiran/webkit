const repo = require('../repo/contact.repo');

exports.findAll = (req,res)=>{
    repo.findAll(
        (data)=>{
            res.status(200);
            res.send(data);
        },(err)=>{
            console.log(err);
            res.status(500);
            res.send("Could Not Retrive Data");            
        }
    );
};

exports.findById = (req,res)=>{
    repo.findById(
        req.params.id,
        (data)=>{
            res.status(200);
            res.send(data);
        },(err)=>{
            console.log(err);
            res.status(404);
            res.end();            
        }
    );
};

exports.create = (req,res)=>{
    repo.create(
        req.body,
        (data)=>{
            res.status(200);
            res.send(data);
        },(err)=>{
            console.log(err);
            res.status(500);
            res.send("Record Could Not Be Created");            
        }
    );
};

exports.update = (req,res)=>{
    repo.update(
        req.body,
        (data)=>{
            res.status(200);
            res.send(data);
        },(err)=>{
            console.log(err);
            res.status(500);
            res.send("Record Could Not Be Created");            
        }
    );
};

exports.delete = (req,res)=>{
    repo.delete(
        req.params.id,
        ()=>{
            res.status(200);
            res.end();
        },(err)=>{
            console.log(err);
            res.status(500);
            res.send("Record Could Not Be Deleted Or Record Not Found");            
        }
    );
};