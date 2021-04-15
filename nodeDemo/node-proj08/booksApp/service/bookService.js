var mysql = require('mysql');

const connectionConfig = {
    host:"localhost",
    username:"root",
    password:"root",
    database:"expressBooksDB"
};

var connection = mysql.createConnection(connectionConfig);

exports.getAllBooks = (callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        } else {
            let qry = "SELECT * FROM Books";

            connection.query(qry,(err,result)=>{
                callBack(err, result);
            });
        }
    });
}

exports.getBookById = (bookId, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        } else {
            let qry = "SELECT * FROM Books WHERE bookId="+bookId;

            connection.query(qry,(err,result)=>{
                callBack(err, result);
            });
        }
    });
}

exports.insertBook = (book, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        } else {
            let qry = `INSERT INTO Books VALUES(${book.bookId},'${book.title}',${book.price})`;

            connection.query(qry,(err,result)=>{
                callBack(err, result);
            });
        }
    });
}

exports.modifyBook = (book, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        } else {
            let qry = 
            `UPDATE Books 
             SET title='${book.title}',price=${book.price}
             WHERE bookId=${book.bookId}`;

            connection.query(qry,(err,result)=>{
                callBack(err, result);
            });
        }
    });
}

exports.deleteBook = (bookId, callBack) => {
    connection.connect((err) => {
        if (err) {
            throw err;
        } else {
            let qry = `DELETE FROM Books WHERE bookId=${bookId}`;

            connection.query(qry,(err,result)=>{
                callBack(err, result);
            });
        }
    });
}