let Box = require('./module1').Box;
let GreetService = require('./module2').GreetService;
let funcs = require('./module3');

let f1 = funcs.f1;
let f2 = funcs.f2;

let b = new Box();
console.log(b.print());

console.log(GreetService.greet("Vamsy"));