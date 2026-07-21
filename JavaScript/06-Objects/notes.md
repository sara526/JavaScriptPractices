### Dot Notation vs Bracket Notation

user.name

- accesses the property "name".

user["name"]

- also accesses the property "name".

user[name]

- JavaScript treats `name` as a variable, not as the string "name".

### When using `new` in Constructor Function:

1. JavaScript creates a new object.
2. `this` refers to that new object.
3. The object is returned automatically.

### instanceof
 
The instanceof operator checks whether an object was created by a specific constructor function.

## Things I Learned

- Dot notation vs bracket notation.
- Computed property names.
- Constructor functions.
- instanceof operator.
- delete operator.

## Ways to Create Objects

1. Object Literal {}
   - Most common and recommended.

2. new Object()
   - Old way.

3. Factory Function
   - Creates and returns new objects. Useful for creating multiple objects with the same structure while avoiding repeated code.

## ES6 Shorthand

Property Shorthand

name,  is equivalent to

name: name,

Method Shorthand

greet() {}

is equivalent to

greet: function() {}
## Nested Objects

Objects can contain other objects.

Example: profile.address.city
## this Keyword

Inside an object method,

this

refers to the object that called the method.

## for...in

Loops through the property names (keys) of an object.

## Object.keys()

Returns an array of an object's property names.

## The `in` operator 

checks whether a property exists in an object. "name" in profile

## Objects are compared by reference, not by value
{} === {}          // false

[] === []          // false

"JS" === "JS"      // true

10 === 10          // true

## Objects are assigned by reference

const a = { x: 1 };
const b = a;

b.x = 10;

console.log(a.x); // 10
Changing one reference changes the same object, because both variables point to the same object.

## const with Objects

const protects the reference, not the object's contents.

✅ Allowed:
obj.name = "Ahmed";
obj.age = 30;
delete obj.name;

❌ Not Allowed:
obj = {};