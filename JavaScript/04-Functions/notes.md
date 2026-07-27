## Function Hoisting

| Function Type | Declaration Keyword | Can Be Called Before Definition? | Result | Reason |
|-------------------------------|-------------------|----------------------------------|------------------|--------------------------------------------|
| Function Declaration | `function` | ✅ Yes | ✅ Works | Function declarations are fully hoisted. |
| Function Expression | `const` | ❌ No | ❌ `ReferenceError` | `const` is in the **Temporal Dead Zone (TDZ)** until initialization. |
| Function Expression | `let` | ❌ No | ❌ `ReferenceError` | `let` is in the **Temporal Dead Zone (TDZ)** until initialization. |
| Function Expression | `var` | ❌ No | ❌ `TypeError` | `var` is hoisted and initialized with `undefined`, so `undefined()` is called. |

> **Rule of Thumb**
>
> - ✅ Function Declarations are fully hoisted.
> - ⚠️ Function Expressions follow the hoisting behavior of the variable (`var`, `let`, or `const`) they are assigned to.

## Function Hoisting

### Function Declaration

```js
sayHi();

function sayHi() {
  console.log("Hi");
}
```

✅ Works because function declarations are fully hoisted.

---

### Function Expression (`const` / `let`)

```js
sayHello();

const sayHello = function () {
  console.log("Hello");
};
```

❌ `ReferenceError`

Reason:
`const` and `let` are in the **Temporal Dead Zone (TDZ)** until they are initialized.

---

### Function Expression (`var`)

```js
sayHello();

var sayHello = function () {
  console.log("Hello");
};
```

❌ `TypeError`

Reason:
`var` is hoisted and initialized with `undefined`, so JavaScript tries to call `undefined` as a function.

## Callback Function

A callback is a function passed as an argument to another function.

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
- Don't call it immediately → `greet(sayBye())` ❌
- The receiving function decides **if**, **when**, and **how** to execute the callback.

## Higher-Order Function (HOF)

A Higher-Order Function is a function that:

- ✅ Takes one or more functions as arguments.
- ✅ Returns a function.

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