import add from './Sum.js'

describe("Home page functionality",()=>{

    test("checking sum function test 1",()=>{

        expect(add(12,20)).toBe(32);
    })

    describe("login page functionality",()=>{

        test("checking sum function test 2",()=>{

            expect(add(4,10)).toBe(32);
        })

        test("checking sum function test 3",()=>{

            expect(add(5,6)).not.toBe(32);
        })
    })
})


// test('my first test case',()=>{

//     let data=10;
//     expect(data).toBe(10);
// })