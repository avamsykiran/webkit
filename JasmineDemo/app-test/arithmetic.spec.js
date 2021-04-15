const arithmetic = require('../app/arithmetic');

describe("arithemtic functions",()=>{

    describe("sum",()=>{

        it("should return positive number when both params are positive",()=>{
            expect(arithmetic.sum(12,13)).toBe(25);
        });

        it("should return difference when any of the params is negative",()=>{
            expect(arithmetic.sum(12,-13)).toBe(-1);
            expect(arithmetic.sum(-12,13)).toBe(1);
        });

        it("should return the non-zero param when any of the params is zero",()=>{
            expect(arithmetic.sum(12,0)).toBe(12);
            expect(arithmetic.sum(0,13)).toBe(13);
        });
    });

    describe("prod",()=>{
        it("should return positive number when both params are positive",()=>{
            expect(arithmetic.prod(4,10)).toBe(40);
        });

        it("should return negative number when any of the params is negative",()=>{
            expect(arithmetic.prod(4,-10)).toBe(-40);
            expect(arithmetic.prod(-4,10)).toBe(-40);
        });

        it("should return zero when any of the params is zero",()=>{
            expect(arithmetic.prod(12,0)).toBe(0);
            expect(arithmetic.prod(0,13)).toBe(0);
        });

        it("should return non-one param when any of the params is one",()=>{
            expect(arithmetic.prod(12,1)).toBe(12);
            expect(arithmetic.prod(1,13)).toBe(13);
        });
    });
});