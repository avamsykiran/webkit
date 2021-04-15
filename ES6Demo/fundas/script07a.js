var books = [
    {bcode:101,title:"Let Us C",price:234},
    {bcode:102,title:"Let Us C++",price:534},
    {bcode:103,title:"To Start With React",price:1234},
    {bcode:104,title:"To Start With Angular",price:234},
    {bcode:105,title:"To Start With NodeJS",price:734}
];

console.log(books);
console.log(books.concat({bcode:106,title:"Let Us Java",price:2314}));
console.log(books);

let book = books.find((b) => b.bcode==103);
let bookIndex = books.findIndex((b) => b.bcode==103);
console.log(`${bookIndex} -> ${JSON.stringify(book)}`);

console.log(books.filter((b) => b.title.startsWith("To Start With")));

books.forEach((b) => {
    console.log(`The Book#${b.bcode} is titled "${b.title}" 
    costs INR.${b.price}`);
});

let bookMinPriced = books.reduce( (b1,b2) => b1.price<b2.price?b1:b2 );
console.log(bookMinPriced);

let bookMinPriced2 = books.reduceRight( (b1,b2) => b1.price<b2.price?b1:b2 );
console.log(bookMinPriced2);

console.log(books.map((b) => b.title));