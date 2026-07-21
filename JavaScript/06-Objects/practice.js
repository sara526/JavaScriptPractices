/*
Day 12 - JavaScript Objects

Topics:
- Object Literal
- Constructor Function
- Factory Function
- this 
- Nested Objects
- Object.keys()
- Object.values()
- Object.entries()
- Reference vs Value
- Execution Context
*/
//⭐⭐⭐⭐⭐
const user = {
    name: "Sara",
    age: 31,
    "is admin": true
};
console.log(user.name); //Sara
console.log(user["name"]); //Sara
console.log(user[name]); //undefined
console.log(user["is admin"]); // true
user["movie lover"] = false;
//console.log(user.movie lover); Error
console.log(user["movie lover"]);
console.log(user);
delete user.age; 
console.log(user);

const student = {
    name: "Sara",
    age: 27,
    code: 1023
};
console.log(student.city);    //undefined
//console.log(student.city.country); TypeError

//-- ⭐ Bracket Notation ⭐----------
const someKey = "name";
console.log(user[someKey]); 

// let car = prompt("Which is your fav car?");
// let favCars ={
//     [car]: 4    //ES6 Computed Property Names. The expression inside [] is evaluated first, then its value becomes the property name⭐
// }
// console.log(favCars);

//--- ⭐ Constructor Function -------
function Car(name, model) {
    this.name= name;
    this.model= model
}
const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar);
console.log(audiCar);
console.log(audiCar instanceof Car); //true
const mazdaCar = {
    name: "Mazda",
    model: "CX-5"
};
console.log(mazdaCar instanceof Car); //false

// --- Old Syntax ---------- 
const person = new Object()
    person.name = "Lina";
    person.age = 33;
    console.log(person);

//--- ⭐ Factory Function ⭐ ----
function createUser(name, age){
    return {
        name,          //⭐Property Shorthand (ES6)
        age,
        greet(){       //⭐Method Shorthand (ES6)
            console.log(`Hi my name is ${this.name}`)
        }
    }
}
const user1 = createUser("Sara", 30)
console.log(user1);
user1.greet();
const user2 = createUser("Mohammed", 40)
console.log(user2);
user2.greet();

let profile = {
    name: "Sara",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    //Nested Objects
    address: {
        city: "Nasr City",
        pin: 46032,
        state: "Cairo",
        country: "Egypt",
        greeting: function() {
            console.log(`Welcome to ${this.country}`);
        }
    }
}
profile.message();
profile.address.greeting();

//for...in loops through the property names (keys) of an object
for (let key in student) {
    console.log(key);
    console.log(student[key]);
}
console.log(Object.keys(student)); //Array of property names
console.log(Object.entries(student));
console.log(Object.values(student));
console.log("age" in student);
console.log(student.country);
console.log(student.city); // undefined
// console.log(student.city.country); // TypeError
profile.message();

// Object Reference
const a = { value: 10 };
const b = a;
console.log(a === b);

console.log("Inside Global Execution Context");

let z = 5;
function testMe() {
    console.log("Inside testMe Execution Context");
    let b = 10;
    let x = {
        name: "tapas",
        country: "India"
    };
    function testAgain() {

        console.log("Inside testAgain Execution Context");

        console.log("Exiting testAgain Execution Context");
    }
    testAgain();

    console.log("Exiting testMe Execution Context");
}
testMe();
console.log("Exiting Global Execution Context");

let fruit = { name: "mango"}; // XA01
const oneMoreFruit = { name: "mango"}; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false
fruit = oneMoreFruit;
console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true
