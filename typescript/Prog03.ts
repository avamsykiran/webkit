//Rest Parameters

function sum(...nums: number[]): number {
    let s: number = 0;

    for (let n of nums) {
        s += n;
    }

    return s;
}

function prd(nums: number[]): number {
    let p: number = 1;

    for (let n of nums) {
        s *= n;
    }

    return p;
}

console.log(sum());
console.log(sum(34));
console.log(sum(34, 67));
console.log(sum(45, 66, 77, 88));

//console.log(prd());
console.log(prd([34]));
console.log(prd([34, 67]));
console.log(prd([45, 66, 77, 88]));