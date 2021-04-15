/*
    Sugar Syntex:
        Syntantical enhancements that increase the 
        ease of programming and are 
        more human readable.
*/

//multi-line strings:

message1 = "This is a test message This is a test message This is a test message " +
        "This is a test message ";

message2 = `This is a test message too.This is a test message too.
This is a test message too.This is a test message too. `;

console.log(message1);
console.log(message2);

//arrow functions - is already discussed.

//template literals
var fnm1 = "Srinu";
var fnm2 = "Deepa";
var n = 10;
message3 = fnm1 + " got married to " + fnm2 + ", "+ n +" yrs ago";
message4 = `${fnm1} got married to ${fnm2}, ${n} yrs ago`;
console.log(message3);
console.log(message4);

//default parameters
function greetUser(userName = "SomeBody"){
    return "Hello " + userName;
}

console.log(greetUser());
console.log(greetUser("Srinu"));

/*
* Function and Block Scoped Variables
* var
* let
* const
*/

const MIN_BAL = 500;

if(true){
    var x=89;
    let y=78;
    z=34;
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
//console.log(y); //will generate error
console.log(z);

//classes and modules - already discussed.

class Box{
    constructor(){
        this.length=0;
        this.width=0;
        this.height=0;
    }
}

let b = new Box();
b.height=56;
b.width=4;
b.length=67;
console.log(b);

let b2 = new Box();
b2 = {length:67,height:34,width:12};
console.log(b2);

//Destructing assignment
//let height = b.height;
//let width = b.width;

let {height,width} = b2;

console.log(height);
console.log(width);

//a new class called Promise
