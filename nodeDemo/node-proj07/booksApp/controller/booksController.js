var bs = require("../service/bookService");

exports.defaultGetHandler = (req, res) => {
    bs.getAllBooks((err, result) => {
        if (err) {
            res.status(500);
            res.end();
            console.log(err);
        } else {
            res.status(200);
            res.send(result);
        }
    });
}

exports.getByIdHandler = (req, res) => {
    let bookId = req.params.id;

    bs.getBookById(bookId,(err,result)=>{
        if (err) {
            res.status(500);
            res.end();
            console.log(err);
        } else if (result) {
            res.status(200);
            res.send(result);
        } else {
            res.status(404);
            res.end();
        }
    });
}

exports.createBookHandler = (req, res) => {

    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price
    };

    bs.insertBook(book,(err,result)=>{
        if (err) {
            res.status(500);
            res.end();
            console.log(err);
        } else {
            res.status(200);
            res.end();
        }
    });
}

exports.modifyBookHandler = (req, res) => {

    let book = {
        bookId: req.body.bookId,
        title: req.body.title,
        price: req.body.price
    };

    bs.modifyBook(book,(err,result)=>{
        if (err) {
            res.status(500);
            res.end();
            console.log(err);
        } else {                      
            res.status(result.result.n>0?200:404);
            res.end();
        }
    });
}

exports.deleteByIdHandler = (req, res) => {
    let bookId = req.params.id;

    bs.deleteBook(bookId,(err,result)=>{
        if (err) {
            res.status(500);
            res.end();
            console.log(err);
        } else {
            res.status(result.result.n>0?200:404);
            res.end();
        }
    });
}