
class Book{
    constructor(bcode,title,price){
        this.bcode=bcode;
        this.title=title;
        this.price=price;
    }
}

printSet = function(set){
    console.log(`we have ${set.size} element(s)`);

    for(let ele of set){
        console.log(ele);
    }
}

var set1 = new Set();

set1.add(new Book(101,"Let Us C",234));
set1.add(new Book(102,"Let Us C++",134));
set1.add(new Book(103,"Let Us C#",2304));

printSet(set1);

var set2 = new WeakSet();

var b1 = new Book(101,"Let Us C",234);

set2.add(b1);
set2.add(new Book(102,"Let Us C++",134));
set2.add(new Book(103,"Let Us C#",2304));

//printSet(set2);