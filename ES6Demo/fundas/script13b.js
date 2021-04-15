var weeks =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function* getWeeks() { 
    let i=0;
    
    while(i<weeks.length-1){
        yield weeks[i++];
    }
    
    return weeks[i];    
} 

wks = getWeeks();

hasNext =true;
while (hasNext) { 
    curWeek = wks.next(); 
    console.log(curWeek.value); 
    hasNext = !curWeek.done;
}