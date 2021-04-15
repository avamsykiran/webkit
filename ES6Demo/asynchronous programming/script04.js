class RandomNumberSeries {

    constructor(title,limit){
        this.intervalHandler=null;
        this.count=0;
        this.limit=limit;
        this.title=title;
    }

    nextNumber() {
        let output= Math.trunc(Math.random() * 100);
        console.log(`${this.title} >> ${output}`);

        this.count++;
        if (this.count === this.limit) {
            clearInterval(this.intervalHandler);
        }
    }

    generateRandomSeries(){
        this.count = 0;
        //this.intervalHandler = setInterval(this.nextNumber, 2000);
        this.intervalHandler = setInterval(()=>{this.nextNumber();}, 2000);
    }
}

let series1 = new RandomNumberSeries("Series1",10);
let series2 = new RandomNumberSeries("Series2",5);

series1.generateRandomSeries();
series2.generateRandomSeries();