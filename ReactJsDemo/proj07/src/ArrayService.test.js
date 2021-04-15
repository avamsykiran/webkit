import { doOnEach,doOnEachAsync } from './ArrayService';

let calls,results;
let myMock = jest.fn(x => x+1);
let data = [1, 2, 3, 4, 5];

beforeEach(() => {
    doOnEach(data, myMock);
    calls = myMock.mock.calls;
    results = myMock.mock.results;
});

afterEach(() => {
    calls = null;
    results=null;
});

test(" mock should to be executed for 5 times", () => {
    expect(calls.length).toBe(5);
});

test("the first argument of the mock should be the respective arr element", () => {
    for(let i=0;i<data.length;i++){
        expect(calls[i][0]).toBe(data[i]);
    }
});

test("mock should return one more than each arr ele", () => {
    for(let i=0;i<data.length;i++){
        expect(results[i].value).toBe(data[i]+1);
    }
});

test("Check asyn task",(done)=>{

    let input =100;

    const callBack = (data) =>{
        expect(data).toBe(input+10);
        done();
    };

    doOnEachAsync(input,callBack,2000);
});