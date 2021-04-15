function* dummyGenerator(){

    yield "stage 1 completed";

    yield "stage 2 completed";

    return "job completed";
}

function temp(){
    
    console.log("I am temp function");
    stages = dummyGenerator();
   
    shallContinue = true;

    while(shallContinue){
        currStage = stages.next();
        console.log(currStage.value);
        console.log("I am temp function");        
        shallContinue = !currStage.done;
    }
}

temp();