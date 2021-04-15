
class ArraySeries {

    constructor(title,data,indicator){
        this.data=data;
        this.indicator=indicator;
        this.title=title;
    }

    extract(){        
        let p = new Promise(
            (resolve,reject) => {
                
                if(!(this.indicator==1 || this.indicator==-1) ){
                    reject(`${this.title} Invalid Indicator`);
                    return;
                }
                
                if(!this.data || this.data.length==0 ){
                    reject(`${this.title} Undifiend or Empty data`);
                    return;
                }

                let index=0;

                let finalOutput = [];

                this.intervalHandler = setInterval(()=>{
                    
                    if(this.indicator==1 && index%2==0){
                        finalOutput.push(this.data[index]);
                    }else if(this.indicator==-1 && index%2==1){
                        finalOutput.push(this.data[index]);
                    } 
                                
                    index++;
                    if (index==this.data.length) {
                        clearInterval(this.intervalHandler);
                        resolve(finalOutput);
                    }
                }, 15);
            }
        );
        return p;
    }
}

let team = ["Ram","Usha","Sravn","Raghav","Soumya","Harika"];

console.log("original array: ");

for(let fnm of team){
    console.log(fnm);
}

let s1 = new ArraySeries("EvenSeriesTest",team,1);
let s2 = new ArraySeries("OddSeriesTest",team,-1);
let s3 = new ArraySeries("EmptyArrayTest",[],1);
let s4 = new ArraySeries("NullArrayTest",null,1);
let s5 = new ArraySeries("InvaldIndicatorTest",team,10);

s1.extract().then(
    (result) => {console.log(result);},
    (err) => {console.log(err);},
);
s2.extract().then(
    (result) => {console.log(result);},
    (err) => {console.log(err);},
);
s3.extract().then(
    (result) => {console.log(result);},
    (err) => {console.log(err);},
);
s4.extract().then(
    (result) => {console.log(result);},
    (err) => {console.log(err);},
);
s5.extract().then(
    (result) => {console.log(result);},
    (err) => {console.log(err);},
);
