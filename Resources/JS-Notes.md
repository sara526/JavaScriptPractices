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