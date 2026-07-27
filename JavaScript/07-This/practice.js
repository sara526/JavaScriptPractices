"use strict";
//Global
//---- this keyword and window object ----
console.log("this at global",this);
function test() {
  console.log(this);
}

test(); 

//inside of an object ------ Implicit Binding
const user = {
    id: "A5560N",
    firstName: "Sara",
    lastName: "Mohammed",
    returnThis: function(){
        return this;
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log("User ID:", user.id);
console.log("User first name:", user.firstName);
console.log("returnThis: ", user.returnThis());
console.log("Constructed Full Name using this", user.getFullName());

const a = {
    name: "Ahmed",
    age: 27
}
const b = {
    name: "Mona",
    age: 31
}
function greet(obj){
    obj.logMessage = function() {
        console.log(`${this.name} ${this.age}`);
    }
    console.log(obj);
}
greet(a);
a.logMessage();

greet(b);
b.logMessage();

// Regular function:
// Non-strict mode -> this === window
// Strict mode -> this === undefined
//---- inside function ----
function sayName(){
    console.log("this inside a function", this);
}
sayName();

function outer(){ 
    console.log("this inside an outer function", this);
    //Every regular function has its OWN 'this'.
    return function inner(){
        console.log("this inside an inner function", this);
    }
}
const outerResult = outer();
outerResult();

const student = {
  name: "Sara",

  outer: function () {
    console.log("Outer:", this.name); // this === Sara

    return function inner() {
      console.log("Inner:", this);  // this === window
    };
  },
};
// student.inner();
const fn = student.outer();
fn();

//---- arrow function -----
const customer = {
  name: "ٌMona",
  outer: function () {
    return () => {
      console.log(this.name); // this === customer{}
    };
  },
};

const fn2 = customer.outer();
fn2();

// ----- Explicit Binding ------ call(), apply(), bind()
// The call method > obj,arg1

function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user1 = {
    name: 'tapaScript',
    address: 'All of YOU!'
};

greeting.call(user1);


const likes = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const person1 = {
    name: "Tapas"
}

likes.call(person1, "Teaching", "Blogging");

// apply(obj, [arg1, arg2]) 

const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person1, hobbiesToApply)

// bind()
const newHobbies = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const person2 = {
    name: 'Sara',
};

const newFn = newHobbies.bind(person2, "reading", "cooking");
newFn();

// ---- New Binding -----
// Using `new` creates a new object and binds `this` to it.
const Cartoon = function(name, animal) {
    this.name = name;
    this.animal = animal;
    this.log = function() {
        console.log(this.name +  ' is a ' + this.animal);
    }
};

const tomCartoon = new Cartoon("Tom", "Cat");
tomCartoon.log();

const jerryCartoon = new Cartoon("Jerry", "Mouse");
jerryCartoon.log();