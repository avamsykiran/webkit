"use strict";

//assigning a function to a object

var f1 = function () {
    console.log("I am called");
}

f1(); //we can call it this way.        

var x = 67;

function f2(){
    x = 87;
    var y = 56;
  
    var z = 78; //function scoped variables
    let a = 88; //block scoped variable

    if(true){
        var i=45;
        let j= 77;
    }
    console.log(i);
    //console.log(j);
}

f2();

console.log(x);
//console.log(y);
//console.log(z);
//console.log(a);