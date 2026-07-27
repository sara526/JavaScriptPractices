# JavaScript - `this`

## Rules

- ✅ `this` depends on **how a function is called**, not where it is defined.
- ✅ In the browser's global scope, `this` refers to the `window` object (even in strict mode).
- ✅ Every regular function has its own `this`.
- ✅ Arrow functions do **not** have their own `this`; they inherit it from the surrounding scope.

## Golden Rule

| Function Type | Has its own `this`? | Can `call()`, `apply()`, or `bind()` change `this`? |
|---------------|---------------------|-----------------------------------------------------|
| Regular Function | ✅ Yes | ✅ Yes |
| Arrow Function | ❌ No | ❌ No (it inherits `this` from the surrounding scope) |

> Arrow functions don't have their own `this`.
> They inherit `this` from the surrounding scope (lexical `this`).

## Binding Types

JavaScript determines the value of `this` using different binding rules:

- 🌍 Global Binding
- 📦 Implicit Binding (Object Method)
- 🎯 Explicit Binding (`call`, `apply`, `bind`)
- 🆕 New Binding (`new`)
- ➡️ Lexical Binding (Arrow Functions)

## Things that confused me

- Difference between a regular function and an arrow function regarding `this`.
- Why nested functions (`outer` / `inner`) have different `this` values.
- Remember: every regular function gets its own `this`, determined by how it is called.

## Common mistakes

- Using an arrow function as an object method when `this` is needed.
- Thinking `this` depends on where the function is defined instead of how it's called.
- Assuming nested functions automatically inherit the outer function's `this`.

## My Example

```js
const person = {
  name: "Sara",
  sayName() {
    console.log(this.name);
  },
};

person.sayName(); // Sara
```

```js
const person = {
  name: "Sara",
  sayName: () => console.log(this.name),
};

person.sayName(); // undefined (in browser)
```

# JavaScript - Explicit Binding

> `call()` and `apply()` invoke the function immediately.
>
> `bind()` returns a new function without invoking it.

## call()

- Calls a function immediately.
- Allows you to explicitly set the value of `this`.
- Arguments are passed one by one.

```js
fn.call(obj, arg1, arg2);
```

---

## apply()

- Calls a function immediately.
- Allows you to explicitly set the value of `this`.
- Arguments are passed as an array.

```js
fn.apply(obj, [arg1, arg2]);
```

---

## bind()

- Does NOT call the function immediately.
- Returns a new function.
- Permanently binds `this` to the provided object.

```js
const newFn = fn.bind(obj);
newFn();
```

---

## new Binding

Using `new`:

- Creates a new object.
- Sets `this` to the new object.
- Executes the constructor.
- Returns the new object.

---

### Quick Reminder

- ✅ Regular Function → **Who called me?**
- ✅ Arrow Function → **Where was I created?**

| Method | Calls Immediately? | Returns a Function? |
|---------|--------------------|---------------------|
| call() | ✅ Yes | ❌ No |
| apply() | ✅ Yes | ❌ No |
| bind() | ❌ No | ✅ Yes |

## 🚩 Red Flag: Losing `this`

Whenever you see:

```js
const fn = obj.method;
```

Stop and ask yourself:

> **How will this function be called?**

If it's called like this:

```js
fn();
```

The function has **lost its object context**.

For a regular function:

- In **strict mode** → `this === undefined`
- In **non-strict mode (browser)** → `this === window`

If you want `this` to refer to the original object, call it with:

```js
obj.method();
```

or explicitly bind the context:

```js
fn.call(obj);
fn.apply(obj);
const boundFn = fn.bind(obj);
boundFn();
```

### Remember

- 🚩 `const fn = obj.method;` → The function is detached from the object.
- ❓ Always ask: **"Who is calling this function?"**
- ✅ `obj.method()` keeps the object context.
- ❌ `fn()` loses the object context.

## Lost Context

A regular function can lose its object context when it is detached from the object.

```js
const fn = obj.method;
fn();

## My Mental Checklist

Whenever I see `this`, I ask:

1. Is it a Regular Function or an Arrow Function?
2. How is the function being called?
3. Is the function detached from its object?
4. Is `call()`, `apply()`, `bind()`, or `new` being used?