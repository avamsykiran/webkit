let counter = (function(){

    let count = 0;

    return (function(){
        count++;
        return count;
    })
})();

for(let i1;i<=5;i++){
    console.log(counter());
}