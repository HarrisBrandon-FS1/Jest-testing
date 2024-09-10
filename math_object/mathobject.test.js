const {
    add, subtract, divide, multiply
} = require("./mathobject")

describe("Testing the math object basic math", () => {

    test("should add two numbers together", () =>{
        expect(add(2+2)).toBe(4);
    });

    test("should subtract two numbers", () =>{
        expect(subtract(2-2)).toBe(0);
    });

    test("should divide two numbers", () => {
        expect(divide(2/2)).toBe(1);
    });
    
    test("should multiply two numbers", () =>{
        expect(multiply(2*2)).toBe(4);
    });
});

const {
    sqroot, max
} = require("./mathobject")

describe("Testing the advanced Math Object", () => {

    test("should find square root of a number", () => {
        expect(sqroot(9)).toBe(3); 
    });
    test ("should show maximum of two numbers", () =>{
        expect(max(2,6)).toBe(6);
    });
})