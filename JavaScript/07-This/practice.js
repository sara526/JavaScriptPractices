//Global
//---- this keyword and window object ----
console.log("this at global",this);

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
console.log("this inside user:", user.firstName);
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

//---- regularFunction()  => this === window (non-strict mode) ----
//---- inside function ----
function sayName(){
    console.log("this inside a function", this);
}
sayName();

function outer(a){ 
    console.log("this inside an outer function", this);
    //Every regular function has its OWN 'this'.
    return function inner(b){
        console.log("this inside an inner function", this);
    }
}
const outerResult = outer(5);
outerResult(8);

const student = {
  name: "Sara",

  outer: function () {
    console.log("Outer:", this.name); // this === Sara

    return function inner() {
      console.log("Inner:", this);  // this === window
    };
     inner();
  },
};
// student.inner();
const fn = student.outer();
fn();

//---- arrow function ----
// const customer = {
//   name: "Sara",
//   outer: function () {
//     return () => {
//       console.log(this.name); // this === customer{}
//     };
//   },
// };

// const fn2 = customer.outer();
// fn2();

// Explicit Binding - call, apply, bind

// The call method

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

likes.call(person1, "Teaching", "Blogging")

// apply()

const hobbiesToApply = ["Sleeping", "Eating"];

likes.apply(person1, hobbiesToApply)

// bind()
const newHobbies = function(hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}

const officer = {
    name: 'Bob',
};

const newFn = newHobbies.bind(officer, "Dancing", "Singing");
newFn();

// The new binding

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