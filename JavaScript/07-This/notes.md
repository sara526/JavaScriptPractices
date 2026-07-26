# JavaScript - `this`

## Rules

- [ ] `this` depends on **how a function is called**, not where it is defined.
- [ ] In the browser's global scope, `this` refers to the `window` object.
- [ ] Every regular function has its own `this`.
- [ ] Arrow functions do **not** have their own `this`; they inherit it from the surrounding scope.

## Golden Rule

| Function Type | Has its own `this`? | Can `call()`, `apply()`, or `bind()` change `this`? |
|---------------|---------------------|-----------------------------------------------------|
| Regular Function | ✅ Yes | ✅ Yes |
| Arrow Function | ❌ No | ❌ No (it inherits `this` from the surrounding scope) |

> Arrow functions don't have their own `this`.
> They inherit `this` from the surrounding scope (lexical `this`).

## Things that confused me

- Difference between a regular function and an arrow function regarding `this`.
- Why nested functions (`outer` / `inner`) have different `this` values.
- Remember: each regular function gets its own `this` when it's called.

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

### Quick Reminder

- ✅ Regular Function → **Who called me?**
- ✅ Arrow Function → **Where was I created?**

### Interview Tip

**Q:** What's the difference between a regular function and an arrow function regarding `this`?

**A:**
- Regular functions have their own `this`, determined by how they're called.
- Arrow functions don't have their own `this`; they inherit it from the surrounding scope.