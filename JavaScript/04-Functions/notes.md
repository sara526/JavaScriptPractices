# JavaScript - Functions Notes

## Function Hoisting

### Core Idea

JavaScript moves declarations to memory before executing the code.

### Hoisting Summary

| Function Type | Declaration Keyword | Can Be Called Before Definition? | Result | Reason |
|-------------------------------|-------------------|----------------------------------|------------------|--------------------------------------------|
| Function Declaration | `function` | ✅ Yes | ✅ Works | Function declarations are fully hoisted. |
| Function Expression | `const` | ❌ No | ❌ `ReferenceError` | `const` is in the **Temporal Dead Zone (TDZ)** until initialization. |
| Function Expression | `let` | ❌ No | ❌ `ReferenceError` | `let` is in the **Temporal Dead Zone (TDZ)** until initialization. |
| Function Expression | `var` | ❌ No | ❌ `TypeError` | `var` is hoisted and initialized with `undefined`, so `undefined()` is called. |

### Examples

#### Function Declaration

```js
sayHi();

function sayHi() {
    console.log("Hi");
}
```

✅ Works because function declarations are fully hoisted.

---

#### Function Expression (`const` / `let`)

```js
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

❌ `ReferenceError`

Reason:

`const` and `let` are in the **Temporal Dead Zone (TDZ)** until initialization.

---

#### Function Expression (`var`)

```js
sayHello();

var sayHello = function () {
    console.log("Hello");
};
```

❌ `TypeError`

Reason:

`var` is hoisted and initialized with `undefined`, so JavaScript tries to call `undefined` as a function.

### Remember

- ✅ Function Declarations are fully hoisted.
- ⚠️ Function Expressions follow the hoisting behavior of the variable (`var`, `let`, or `const`).

---

## Callback Function

### Core Idea

Pass a function to another function and let it decide **if**, **when**, and **how** to execute it.

A callback is a function passed as an argument to another function.

### Example

```js
function greet(callback) {
    console.log("Hello!");
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet(sayBye);
```

### Remember

- Pass the function itself → `greet(sayBye)` ✅
- Don't execute it immediately → `greet(sayBye())` ❌
- The receiving function decides **if**, **when**, and **how** to execute the callback.
- A function becomes a **Callback Function** only when it is passed as an argument to another function.

---

## Higher-Order Function (HOF)

### Core Idea

A function that works with other functions.

A Higher-Order Function is a function that:

- Takes one or more functions as arguments.
- Returns a function.

### Example 1: Receives a Function

```js
function greet(callback) {
    callback();
}
```

### Example 2: Returns a Function

```js
function createGreeting() {
    return function () {
        console.log("Hello");
    };
}
```

### Remember

- A function passed as an argument is called a **Callback Function**.
- Every Callback Function is passed to a Higher-Order Function.
- A Higher-Order Function may receive a function, return a function, or do both.

---

## Arrow Function & `this`

### Core Idea

Arrow functions **do not have their own `this`**.
They inherit `this` from the surrounding (lexical) scope.

### Rules

- Regular functions get their own `this` based on **how they are called**.
- Arrow functions inherit `this` from **where they are created**.

### Example

```js
const person = {
    name: "Sara",

    regular() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    },
};

person.regular(); // Sara
person.arrow();   // undefined (browser)
```

### Common Use Case

```js
const person = {
    name: "Sara",

    greet() {
        return () => {
            console.log(this.name);
        };
    },
};

const fn = person.greet();
fn(); // Sara
```

### Remember

- ✅ Regular Function → `this` depends on **how it is called**.
- ✅ Arrow Function → `this` depends on **where it is created**.
- ❌ `call()`, `apply()`, and `bind()` cannot change the `this` of an arrow function.

---

## IIFE (Immediately Invoked Function Expression)

### Core Idea

Create and execute a function immediately.

### Example

```js
(function () {
    console.log("IIFE");
})();
```

### Common Use Cases

- Create a private scope.
- Avoid polluting the global scope.
- Commonly used before ES6 modules.

### Remember

- An IIFE is executed immediately after it is created.
- It usually does not need to be called again.

---

## Recursion

### Core Idea

Solve a problem by solving a **smaller version of the same problem** until reaching a stopping condition.

### Rules

- A recursive function calls itself.
- Every recursive function must have a **Base Case**.
- The Base Case stops the recursion.

### Example

```js
function countdown(n) {
    if (n === 0) return; // Base Case

    console.log(n);

    countdown(n - 1);
}
```

### Flow

```
countdown(3)

3
↓
2
↓
1
↓
0  ← Base Case (Stop)
```

### Remember

- Same problem → Smaller problem.
- No Base Case → Infinite recursion → Stack Overflow.