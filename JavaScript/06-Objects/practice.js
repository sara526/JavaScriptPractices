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
const person = new Object();
    person.name = "Lina";
    person.age = 33;
    console.log(person);

// ----- ⭐ Factory Function ⭐ ------
function createUser(name, age){
    return {
        name,          // ⭐Property Shorthand (ES6)
        age,
        greet(){       // ⭐Method Shorthand (ES6)
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

const profile = {
    name: "Sara",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    //Nested Object
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

// ----- Object Reference ---------
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

fruit = oneMoreFruit;  // Both variables now reference the same object.
console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// ------ Static Methods -------
const target = {a:10 , c:11};
const source = {b:12, d:14};

const result = Object.assign(target,source);
console.log(result); // {a:10, c:11, b:12, d:14}
console.log(target === source); //false
console.log(target === result); // true 

// Existing properties are overwritten.
// New properties are added.
const target2 = {d:10 , c:11}; 
const source2 = {b:12, d:14};
console.log(Object.assign(target2,source2));

// Object.assign() creates a shallow copy
// Primitive values are copied by value
// Nested objects are copied by reference
const obj1 = {name: "SaraMohammed"};
const obj2 = Object.assign({grade:97}, obj1);
console.log(obj2);
console.log(obj1 === obj2); //false
const obj3 = {
    a: 30,    //Primitive value
    c: {b:5}  //Nested object
}
// Shallow copy:
// 'a' is copied by value
// 'c' shares the same reference
const obj4= Object.assign({},obj3);
console.log(obj4);

obj4.a = 50;
console.log(obj4.a); // 50
console.log(obj3.a); // 30
console.log(obj4.c.b); // 5
console.log(obj3.c.b); // 5
console.log(obj3.c === obj4.c); //true 

obj4.c.b = 170;
console.log(obj4.c.b); // 170 (same nested object)
console.log(obj3.c.b); // 170 (shared reference)

const obj5 = structuredClone(obj3);
// Deep copy:
// Creates a completely independent copy
obj5.a = 300;
obj5.c.b = 15;
console.log(obj5); 
console.log(obj5.c.b); // 15
console.log(obj3.c.b); // 170 (original object is unchanged)

// -------- Object.entries() --------
const myObj ={
    a: "Sara",
    b: 30
};
const myArr = Object.entries(myObj);
console.log(myArr); //Returns an array of [key, value] pairs
const entries = new Map ([
    ["foo", "mars"],
    ["baz", 22]
]);
const objEntries = Object.fromEntries(entries); // Converts [key, value] pairs back into an object.
console.log(objEntries); 

// ------- Object.freeze() --------
const emp = {sub: "JavaScript"};
Object.freeze(emp); // Frozen objects cannot be modified, extended or have properties deleted.
emp.sub = "OOP";
emp.sal = 1000; 
console.log(emp.sub); // undefined
delete emp.sal;
console.log(Object.isFrozen(emp)); //true

// --------- Object.seal() ---------
const dept = {
    name: "foo"
}
Object.seal(dept);
dept.address = "Nasr City";  // new properties cannot be added
delete dept.name;  // existing properties cannot be deleted.
dept.name = "HR";  // existing properties can be modified
console.log(dept.name); // HR
console.log(Object.hasOwn(dept,"name")); // true
console.log(Object.hasOwn(dept,"address")); // false
