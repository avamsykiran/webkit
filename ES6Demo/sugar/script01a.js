//spreed operator (...)

let a1 = [1,2,3,4,5];
let a2 = [6,7,8,9,0];

let a3 = [a1,a2];
console.log(a3);

let a4= [...a1,...a2];
console.log(a4);

let a5 = a1.concat(a2);
console.log(a5);

let sum = (a,b,c) => a+b+c;

console.log(sum(5,7,9));

let numData = [23,45,78];
console.log(sum(...numData));

/*--------------------------------------*/

let arr1 = ["suma","uma","rama"];
//let arr2 = arr1;
/*let arr2 = [...arr1];
arr2.push("jaya");*/
let arr2 = [...arr1,"jaya"];
console.log(arr1);
console.log(arr2);

