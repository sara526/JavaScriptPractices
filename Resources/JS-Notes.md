# Interview Tip

**Q:** What's the difference between a regular function and an arrow function regarding `this`?

**A:**
- Regular functions have their own `this`, determined by how they're called.
- Arrow functions don't have their own `this`; they inherit it from the surrounding scope.


## this Keyword

- `this` depends on how a function is called.
- Global scope (Browser): `this === window`.
- `obj.method()` → `this === obj`.
- Regular function → `this === window` (non-strict mode).
- Every regular function has its own `this`.
- Nested functions don't inherit outer `this`.
- Arrow functions have no own `this`.
- Arrow functions inherit `this` from the surrounding scope.
- Avoid using arrow functions as object methods when you need `this`.
