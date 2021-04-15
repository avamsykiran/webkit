
class RandomNumberSeries {

    constructor(eleRef,limit){
        this.intervalHandler=null;
        this.count=0;
        this.limit=limit;
        this.eleRef=eleRef;
    }

    generateRandomSeries(){
        this.count = 0;
        let p = new Promise(
            (resolve,reject) => {
                
                if(this.limit<=0){
                    reject("Invalid Limit");
                    return;
                }

                this.intervalHandler = setInterval(()=>{
                    let output= Math.trunc(Math.random() * 100);
                    
                    let sp = document.createElement("span");
                    sp.textContent=`${output}, `;
                    
                    this.eleRef.appendChild(sp);

                    this.count++;
                    if (this.count === this.limit) {
                        clearInterval(this.intervalHandler);
                        resolve("Job Done");
                    }
                }, 1000);
            }
        );
        return p;
    }
}

main = function(){
    
    let btn = document.querySelector("#startBtn");
    btn.addEventListener("click",()=>{
        let s1Div = document.querySelector("#s1");
        let ser1 = new RandomNumberSeries(s1Div,10);

        ser1.generateRandomSeries().then(
            ()=>{},
            (errMsg)=>{alert(errMsg);}
        );

        let s2Div = document.querySelector("#s2");
        let ser2 = new RandomNumberSeries(s2Div,5);

        ser2.generateRandomSeries().then(
            ()=>{},
            (errMsg)=>{alert(errMsg);}
        );

        let s3Div = document.querySelector("#s3");
        let ser3 = new RandomNumberSeries(s3Div,-5);

        ser3.generateRandomSeries().then(
            ()=>{},
            (errMsg)=>{document.querySelector('#s3').textContent=errMsg;}
        );
    });
}