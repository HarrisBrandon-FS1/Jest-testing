
//addition function
const add = (a, b) => {
    return a + b;
};

const sum = add(2, 2);
console.log("sum", sum);

//subtraction function
const subtract = (a, b) => {
    return a - b;
}
const difference = subtract(2, 2);
console.log("difference", difference)

//division Function
const divide = (a, b) => {
    return a/b ;
}
const quotient = divide(2, 2);
console.log("quotient", quotient)

//multiplication function
const multiply = (a, b) => {
    return a * b;
}
const product = multiply(2, 2);
console.log("Product", product)

//Square Root Function
const squareRoot = (a) => {
    return Math.sqrt(a);
}
const root = squareRoot(9);
console.log("Square Root", root)

//Max of two numbers Function
const max = (a, b) => {
    return Math.max(a, b);
}
const maximum = max(2, 6);
console.log("Maximum", maximum)

module.exports = {
    add,
    subtract,
    divide,
    multiply,
    squareRoot,
    max
}