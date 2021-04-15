
printSet = function(set){
    console.log(`we have ${set.size} element(s)`);

    for(let ele of set){
        console.log(ele);
    }
}

var set1 = new Set();

set1.add("Ant");
set1.add("Antelope");
set1.add("Elephant");
set1.add("Lion");
set1.add("Leapord");

printSet(set1);

set1.delete("Lion");
printSet(set1);

set1.clear();
printSet(set1);