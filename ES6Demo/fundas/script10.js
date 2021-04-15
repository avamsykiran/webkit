
simpleGreetProvider = function(){
    return "Hello ";
}

timlyGreetProvider = function(){
    greet="";

    hour = (new Date()).getHours();

    if(hour>=3 && hour<=11) greet="Good Morning ";
    else if(hour<=15) greet="Good Noon ";
    else greet="Good Evening ";

    return greet;
}

function greetUser(userName,greetProvider){
    return greetProvider() + " " + userName;
}

//calling 

console.log(greetUser("Vamsy",simpleGreetProvider));
console.log(greetUser("Vamsy",timlyGreetProvider));

console.log(greetUser("Vamsy",function() { return "Sasriakal ";}));

console.log(greetUser("Vamsy",()=>"Namasthey "));
console.log(greetUser("Vamsy",()=>"Vanakkam "));
console.log(greetUser("Vamsy",()=>"Namaskar "));

//IIFE - Imdtly Invoked Func Expression

(function(){
    console.log("has to execute here right away..!");    
})();