class RandomNumberSeries {

    constructor(title,limit){
        this.intervalHandler=null;
        this.count=0;
        this.limit=limit;
        this.title=title;
    }

    generateRandomSeries(){
        this.count = 0;
        let p = new Promise(
            (resolve,reject) => {
                
                if(this.limit<=0){
                    reject("Invalid Limit");
                    return;
                }

                let nums = [];

                this.intervalHandler = setInterval(()=>{
                    let output= Math.trunc(Math.random() * 100);
                    nums.push(output);
                    //console.log(`${this.title} >> ${output}`);
            
                    this.count++;
                    if (this.count === this.limit) {
                        clearInterval(this.intervalHandler);
                        resolve(nums);
                    }
                }, 2000);
            }
        );
        return p;
    }
}

let series1 = new RandomNumberSeries("Series1",10);
let series2 = new RandomNumberSeries("Series2",5);
let series3 = new RandomNumberSeries("Series3",-5);

let p1 = series1.generateRandomSeries();

p1.then(
    (data) => { console.log(`Series1 >> ${data}`); },
    (errMsg) => { console.log(errMsg); }
)

let p2 = series2.generateRandomSeries();

p2.then(
    (data) => { console.log(`Series2 >> ${data}`); },
    (errMsg) => { console.log(errMsg); }
)

let p3 = series3.generateRandomSeries();

p3.then(
    (data) => { console.log(`Series3 >> ${data}`); },
    (errMsg) => { console.log(errMsg); }
)