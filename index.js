function add(num1,num2) {
    return num1 + num2
}
add(3,5);
function subtract (num1,num2) {
    return num1 - num2 
}
subtract (8,5);

function multiply (num1,num2) {
    return num1 * num2
}
multiply (5,10);

function divide (num1,num2) {
    return num1 / num2
}
divide (60,5);
function increment (num1) {
    return ++num1
}
console.log(increment (190));

function decrement (num1) {
    return --num1
}
console.log(decrement (190));

function makeInt (num1) {
    return parseInt(num1,10)
}
console.log(makeInt(10.5));

function preserveDecimal (num1) {
    return parseFloat(num1,10)
}
console.log(preserveDecimal(10.675));