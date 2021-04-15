class SeriesOutput{
    constructor(){
        this.nums=[];
        this.prd=1;
    }
}

class EvenNumberSeries {

    constructor(title,lowerLimit,upperLimit){
        this.intervalHandler=null;
        this.count=lowerLimit;
        this.lowerLimit=lowerLimit;
        this.upperLimit=upperLimit;
        this.title=title;
    }

    generateRandomSeries(){        
        let p = new Promise(
            (resolve,reject) => {
                
                if(this.lowerLimit>this.upperLimit){
                    reject(`${this.title} Invalid Limits`);
                    return;
                }

                this.count = this.lowerLimit;

                let finalOutput = new SeriesOutput();

                this.intervalHandler = setInterval(()=>{
                    if(this.count%2===0){
                        finalOutput.nums.push(this.count);
                        finalOutput.prd *= this.count;
                    }
                                
                    this.count++;
                    if (this.count === this.upperLimit) {
                        clearInterval(this.intervalHandler);
                        resolve(finalOutput);
                    }
                }, 15);
            }
        );
        return p;
    }
}

let series1 = new EvenNumberSeries("Series1",1,10);
let series2 = new EvenNumberSeries("Series2",-5,10);
let series3 = new EvenNumberSeries("Series3",45,12);

let p1 = series1.generateRandomSeries();

p1.then(
    (data) => { console.log(`Series1 >> ${data.nums} , sum=${data.prd}`); },
    (errMsg) => { console.log(errMsg); }
)

let p2 = series2.generateRandomSeries();

p2.then(
    (data) => { console.log(`Series1 >> ${data.nums} , sum=${data.prd}`); },
    (errMsg) => { console.log(errMsg); }
)

let p3 = series3.generateRandomSeries();

p3.then(
    (data) => { console.log(`Series1 >> ${data.nums} , sum=${data.prd}`); },
    (errMsg) => { console.log(errMsg); }
)