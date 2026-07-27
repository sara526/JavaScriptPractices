//Define or Declare a Function 
function printThis() {
    console.log("Hello JS");
}
// Function Invocation
printThis();

//Function as an Expression
const printMe = function() {
    console.log("Print Me");
}
printMe();

//Parameters & Arguments 
function sum(a, b) {
    const result = a + b;
    return result;
}
const result1 = sum(20, 9);
console.log(result1); // 29

function double(x) {
    return 2*x;
}
console.log(double(result1)); // 58

//Default Parameters 
function calc1(a, b) {
    return (2 * (a + b ));
}
console.log(calc1(3)); // NaN
function calc2(a=0, b=2) {
    return (2 * (a + b ));
}
console.log(calc2(1)); // 6
const resVar = calc2();
console.log(resVar); // 4

//Rest Parameter 
function calculateThis(x, y, ...rest){
    console.log(x, y, rest);
    console.log(Array.isArray(rest)); // true
    console.log(rest.length); // 7
}
calculateThis(1,2,3,4,5,6,7,8,9);

//Nested Fucntions
function outer() {
    console.log("Outer");
    return function inner() {
        console.log("Inner");
    }
}
outer();
const returnFunc = outer(); 
console.log(returnFunc());   // undefined

//Function Declaration Hoisting

//1- Function Declaration 
sayHi();   // Hi
function sayHi() {
    console.log("Hi");
}
// 2- Function Expression
/*sayHello();   // ReferenceError: Cannot access 'sayHello' before initialization
const sayHello = function () {
    console.log("Hello");
};*/

// callback function
const toCallBuz  = false;
function foo(func) {
    console.log("Sara");
    if (toCallBuz){
        func();
    }
}
const buz = function() {
    console.log("Mohammed")
}
foo(buz);
function teacher(homework) {
    console.log("Listen carefully...");

    homework();

    console.log("Good job!");
}

function student() {
    console.log("I am doing my homework.");
}

teacher(student);