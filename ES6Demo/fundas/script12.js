
function countPrimesInRange(lb,ub){
    count=0;
    for(i=lb;i<=ub;i++){
        curNum = i;
        factCount=2;
        for(j=2;j<=curNum/2;j++){
            if(curNum%j==0){
                factCount++;
            }
        }
        if(factCount==2){
            count++;
        }
    }
    return count;    
}

function main(){
    console.log("Job Initiated!");
    numOfPrimes = countPrimesInRange(10,20);
    console.log(numOfPrimes);
    console.log("Job Terminated!");
}

main();

