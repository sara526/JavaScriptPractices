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

Inside an object method, `this` refers to the object that called the method.

## for...in

Loops through the enumerable property names (keys) of an object.

## Object.keys()

Returns an array of an object's property names.

## The `in` operator 

checks whether a property exists in an object. "name" in profile

## Objects are compared by reference, not by value
{} === {}          // false

[] === []          // false

"JS" === "JS"      // true

10 === 10          // true

## Comparing Objects

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

## Static Methods

Static methods belong to the Object constructor, not to object instances.

Examples:
- Object.keys()
- Object.values()
- Object.entries()
- Object.assign()
- Object.freeze()
- Object.seal()

## Object.assign()

Copies enumerable properties from one or more source objects to a target object.

Object.assign(target, source)

⚠️ It performs a `shallow copy.`

## Shallow Copy

Primitive values are copied by value.

Nested objects are copied by reference.
⚠️ Changes to nested objects affect both copies.

## Deep Copy

Creates a completely independent copy of an object.

Changes to nested objects do not affect the original object.

## Object.assign()

Copies properties from source object(s) to a target object.

Object.assign(target, source)

- Existing properties are overwritten.
- New properties are added.
- Creates a shallow copy.

## structuredClone()

Creates a deep copy.

Nested objects are copied independently, so changes do not affect the original object.

## Object.isFrozen()

Returns `true` if an object is frozen; otherwise returns `false`.

## Object.freeze()

Freezes an object. 

After freezing an object, you cannot:
- Modify existing properties.
- Add new properties.
- Delete properties.

Use `Object.isFrozen()` to check if an object is frozen.

## Summary

- Objects are reference types.
- Primitive values are copied by value.
- Objects are copied by reference unless a deep copy is created.
- `Object.assign()` creates a shallow copy.
- `structuredClone()` creates a deep copy.