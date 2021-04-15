import ArithmeticService from './ArithmeticService';

beforeAll(()=>{
    console.log("Setup Operatiosn that execute only for once per tet suite")
});

afterAll(()=>{
    console.log("TeatDown Operatiosn that execute only for once per tet suite")
});

beforeEach(()=>{
    console.log("Setup Operatiosn that execute once per test case")
});

afterEach(()=>{
    console.log("TeatDown Operatiosn that execute once per test case")
});

test(" sum should return the operand if other operand is 0",()=>{
    let testData1 = 0;
    let testData2 = 17;

    expect(ArithmeticService.sum(testData1,testData2)).toBe(testData2);
});

test(" sum should return 5 given 3 and 2",()=>{
    let testData1 = 3;
    let testData2 = 2;
    let expectedVal =5;

    expect(ArithmeticService.sum(testData1,testData2)).toBe(expectedVal);
});

describe('diff',()=>{
    it('should return 0 given 3 and 3',()=>{
        let testData1=3;
        let testData2=3;
        let expectedVal=0;
        expect(ArithmeticService.diff(testData1,testData2)).toBe(expectedVal);
    });
    it('should return 3 given 6 and 3',()=>{
        let testData1=6;
        let testData2=3;
        let expectedVal=3;
        expect(ArithmeticService.diff(testData1,testData2)).toBe(expectedVal);
    });
    it('should return -3 given 3 and 6',()=>{
        let testData1=3;
        let testData2=6;
        let expectedVal=-3;
        expect(ArithmeticService.diff(testData1,testData2)).toBe(expectedVal);
    });
});