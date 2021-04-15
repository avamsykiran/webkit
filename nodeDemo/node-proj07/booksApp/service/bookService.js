var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

const dbUrl = "mongodb://localhost:27017/";
const dbName = "booksDB";
const colName = "books";

exports.getAllBooks = (callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .find({}).toArray((err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}

exports.getBookById = (bookId, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .findOne({},{ bookId: bookId }, (err, result) => {
                    callBack(err, result);
                    console.log(result);
                    db.close();
                });
        }
    });
}

exports.insertBook = (book, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .insertOne(book, (err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}

exports.modifyBook = (book, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else {
            db.db(dbName).collection(colName)
                .updateOne({ bookId: book.bookId }, {$set:book}, (err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}

exports.deleteBook = (bookId, callBack) => {
    mongoClient.connect(dbUrl, (err, db) => {
        if (err) {
            throw err;
        } else { 
            db.db(dbName).collection(colName)
                .deleteOne({},{ bookId: bookId }, (err, result) => {
                    callBack(err, result);
                    db.close();
                });
        }
    });
}