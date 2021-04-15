
var intervalHandler;
var count=0;
var limit=0;

nextNumber = function(){
    console.log(Math.trunc(Math.random()*100));
    count++;
    if(count===limit){
        clearInterval(intervalHandler);
    }
}

generateRandomSeries  = function(bound){
    limit=bound;
    count=0;
    intervalHandler = setInterval(nextNumber,2000);
}

generateRandomSeries(5);