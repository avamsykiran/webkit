
greet = function(userName="Srinu"){
    console.log("Hello " + userName);
}

setTimeout(greet,2000);

setTimeout(()=>{greet("Vamsy");},2000);

console.log("Program Terminated");