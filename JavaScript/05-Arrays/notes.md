# 📚 Arrays Notes

## ❓ What is an Array?

**Answer:**

An **Array** is a data structure used to store multiple values inside a single variable.

```js
const fruits = ["🍎", "🍌", "🍇"];
```

---

## ❓ Can an Array store different data types?

**Answer:**

✅ Yes.

```js
const mixedArray = [
  100,
  true,
  "Sara",
  {},
  []
];
```

---

## ❓ What is an Index?

**Answer:**

The **index** is the position of an element inside an array.

* The first index is **0**.
* The last index is **length - 1**.

Example:

```js
const fruits = ["🍎", "🍌", "🍇"];
```

| Element | Index |
| ------- | ----: |
| 🍎      |     0 |
| 🍌      |     1 |
| 🍇      |     2 |

---

## ❓ How do I get the last element?

```js
array[array.length - 1]
```

---

## ❓ How do I loop through an array?

```js
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

> ✅ Prefer `i < array.length` instead of `i <= array.length - 1`.

---

# 📦 Array Methods

## ❓ What does `push()` do?

### Answer

Adds one or more elements to the **end** of the array.

```js
const fruits = ["🍎", "🍌"];

fruits.push("🍇");
```

Result:

```js
["🍎", "🍌", "🍇"]
```

Returns:

```js
3
```

---

## ❓ What does `pop()` do?

### Answer

Removes the **last** element.

```js
const removed = fruits.pop();
```

Returns:

```js
"🍇"
```

---

## ❓ What does `unshift()` do?

### Answer

Adds one or more elements to the **beginning**.

```js
fruits.unshift("🥝");
```

Returns the **new length**.

---

## ❓ What does `shift()` do?

### Answer

Removes the **first** element.

```js
const removed = fruits.shift();
```

Returns the removed element.

---

## ❓ What does `slice()` do?

### Answer

Creates a **new copy** of part of an array.

```js
const copy = fruits.slice(1,3);
```

### Important

* ✅ Returns a new array.
* ❌ Does NOT modify the original array.
* ❌ The end index is NOT included.

Example:

```js
const nums = [1,2,3,4,5];

nums.slice(1,4);
```

Returns:

```js
[2,3,4]
```

---

## ❓ What does `includes()` do?

### Answer

Checks whether an element exists.

Returns:

```js
true
```

or

```js
false
```

Example:

```js
names.includes("Sara");
```

---

## ❓ What does `indexOf()` do?

### Answer

Returns the index of an element.

If the element does not exist:

```js
-1
```

Example:

```js
names.indexOf("Sara"); // 0
names.indexOf("Ali");  // -1
```

---

# 📊 Array Methods Comparison

| Method       | Purpose               | Changes Original Array? | Returns          |
| ------------ | --------------------- | :---------------------: | ---------------- |
| `push()`     | Add to end            |            ✅            | New length       |
| `pop()`      | Remove last           |            ✅            | Removed element  |
| `unshift()`  | Add to beginning      |            ✅            | New length       |
| `shift()`    | Remove first          |            ✅            | Removed element  |
| `slice()`    | Copy part of array    |            ❌            | New array        |
| `includes()` | Check if value exists |            ❌            | `true` / `false` |
| `indexOf()`  | Find index            |            ❌            | Index or `-1`    |

---

# 💡 Common Interview Questions

### ❓ Which methods modify the original array?

✅

* push()
* pop()
* shift()
* unshift()

---

### ❓ Which methods do NOT modify the original array?

✅

* slice()
* includes()
* indexOf()

---

### ❓ Which methods return the new length?

✅

* push()
* unshift()

---

### ❓ Which methods return the removed element?

✅

* pop()
* shift()

---

### ❓ Which method returns a new array?

✅

* slice()

---

### ❓ What does `indexOf()` return if the value doesn't exist?

```js
-1
```

---

# ⚠️ Common Mistakes

### ❌ Wrong

```js
array.slice(1,4);
```

returns indexes:

```
1
2
3
4
```

### ✅ Correct

It returns indexes:

```
1
2
3
```

because the **end index is excluded**.

---

### ❌ Wrong

```js
slice() changes the original array
```

### ✅ Correct

`slice()` creates a new array and leaves the original array unchanged.

---

# ⚡ Quick Revision

| Question                         | Answer       |
| -------------------------------- | ------------ |
| First index?                     | `0`          |
| Last index?                      | `length - 1` |
| Add to end?                      | `push()`     |
| Remove last?                     | `pop()`      |
| Add to beginning?                | `unshift()`  |
| Remove first?                    | `shift()`    |
| Copy part of array?              | `slice()`    |
| Search and return Boolean?       | `includes()` |
| Search and return Index?         | `indexOf()`  |
| Not found?                       | `-1`         |
| End index in `slice()` included? | ❌ No         |
