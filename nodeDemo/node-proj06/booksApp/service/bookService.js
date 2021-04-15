var fs = require('fs')

const DATA_FILE = "./booksApp/data/books.json";

const readData = () => {
    return JSON.parse(fs.readFileSync(DATA_FILE));
}

const saveData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data));
}

exports.getAllBooks = () => {
    return readData();
}

exports.getBookById = (bookId) => {
    let books = readData();
    return books.find(b => b.bookId == bookId);
}

exports.insertBook = (book) => {
    let books = readData();
    books.push(book);
    saveData(books);
}

exports.modifyBook = (book) => {
    let isModified = false;

    let books = readData();

    let index = books.findIndex(b => b.bookId == book.bookId);

    if (index > -1) {
        books[index] = book;
        saveData(books);
        isModified = true;
    }

    return isModified;
}

exports.deleteBook = (bookId) =>{
    let isDeleted = false;

    let books = readData();
    let index = books.findIndex(b => b.bookId == bookId);

    if (index > -1) {
        books.splice(index, 1);
        saveData(books);
        isDeleted=true;
    } 

    return isDeleted;
}