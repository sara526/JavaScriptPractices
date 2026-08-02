console.log("tasks.js is loaded");
// ======================================
// Task 1: Convert Celsius to Fahrenheit
// ======================================
function celsiusToFahrenheit(celsius){
   return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(22)); // 71.6
// ============================================================
// Task 2: Create a Function to Find the Maximum of Two Numbers
// ===========================================================
function findMax(num1, num2){
    if (num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}
console.log(findMax(-25, -20)); // -20
/* another solution
function findMax(num1, num2){
    if (num1 > num2) {
        return num1;
    }
    return num2; 
}    */ 
//====================================================
//Task 3: Function to Check if a String is a Palindrome
//====================================================
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length-i-1]) {
            return false;
        }
    }
 return true;
}
console.log(isPalindrome("rana"));
console.log(isPalindrome("madam"));
 
//====================================================
//Task 4: Write a Function to Find Factorial of a Number
//====================================================
function factorial(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result = result * i;   
    }
    return result;
}
console.log(factorial(4));

//==================================================
//Task 7: Use an IIFE to Print “Hello, JavaScript!”
//====================================================
(function (languageName) {
    console.log("Hello, " + languageName + "!");
})("JavaScript");
//====================================================
//Task 8: Create a Simple Callback Function
//====================================================
function greet(name, callback) {
    // Call the callback function and pass the name to it
    callback(name);
}
function printMessage(name) { 
    console.log("Hello, " + name + "!");
}
greet("Sara", printMessage);


