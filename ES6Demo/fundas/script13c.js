let books = [
    {bcode:101,title:"Let Us C",price:234},
    {bcode:102,title:"Let Us C++",price:534},
    {bcode:103,title:"To Start With React",price:1234},
    {bcode:104,title:"To Start With Angular",price:234},
    {bcode:105,title:"To Start With NodeJS",price:734}
];

function* myItr{

    for(i=0;i<books.length-1;i++){
        yield books[i];
    }

    return books[books.length-1];
}

let booksItr = myItr();

do{
    bk = booksItr.next();
    console.log(bk.value);
}while(!bk.done);