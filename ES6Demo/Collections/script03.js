
var map1 = new Map();

map1.set("Mangoes",234);
map1.set("Grapes",34);
map1.set("Apples",1234);
map1.set("Bananas",44);
map1.set("Dates",1034);

console.log(`we have ${map1.size} elements`);

for(let entry of map1.keys()){
    console.log(`A kilo ${entry} costs ${map1.get(entry)}`);
}