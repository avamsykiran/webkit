
greet = function(userName="Srinu"){
    console.log("Hello " + userName);
}

setInterval(() => {greet("Vamsy");},2000);

console.log("Program Terminated");