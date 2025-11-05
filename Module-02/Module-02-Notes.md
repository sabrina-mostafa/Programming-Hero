# Module-02:

## Object VS Map:
1. Limitation
 - Object converts the **key** of any type to **string**

---

## Object of Object:
1. if we assign object as the key the it gives output:
 - **'[object Object]'**

---

## Map:
1. It overcomes the limitation of **'[object Object]'**

---

## map.entries():
1. converts each element to an Array
 - vice versa can also be done (matrix to array)

---

## Sort Function:
1. For Array of Numbers:
 - sort()
   - it converts all the elements to string
   - then sort it alphabetically (lexicographically)
 - sort((a, b) => a-b )
   - Ascending Order
 - sort((a, b) => b-a )
   - Descending Order
2. For Array of String:
 - sort()
   - Capital Letter elements then Small Letter elements Order
 - sort((a, b) => a.**localeCompare**(b))
   - Alphabetical (Lexicographically) Order

---

## Flat Function on Nested Array:
1. flats all the layer
 - flat()
   - flats 1 layer
 - flat(2)
   - flats 2 layers
 - flat(**Infinity**)
   - flats ALL layers

---

## some Function:
1. It returns TRUE or FALSE
  - .some()

---

## from Function:
1. It takes an array and also a mapFunction of (value, index)
 - Array.from( {length:x} or [array], (value, index) => {} )
   - Array.from( {length:5}, (value, index) => {} )
   - Array.from( [1, 2, 3], (value, index) => {} )

---

## Reduce Function:
1. arr.reduce((acc, item) => { return (acc_calculation_here) }, initialization_Value_Of_acc) 
 - **acc** is the **Accumulator**
 - **item** is the **each element** of the container/array
 - initialization_Value_Of_acc is the value we want to initialize the acc with
2. Object.assign(anObject, newElement)
 - using this we can add a new Element to an Object

### What is a Lookup Table?
 - A lookup table is basically **an object (or a Map)** that stores data in a way that makes it super fast **[O(1)]** to find something by a key — instead of searching through an entire array.
  - It’s like a dictionary in real life:
  - You look up a word (the key)
  - You instantly get its definition (the value)
 - **Input**
  - const posts = [ { id: 1, title: "Intro to JS" }, { id: 2, title: "Learning React" } ];
 - **Output**
  - const lookupTable = { 1: { id: 1, title: "Intro to JS" }, 2: { id: 2, title: "Learning React" } };

---

## Binning:
- **binning** means **grouping numerical data into ranges (bins/buckets)** instead of treating every individual value separately.

**Example:**
If you have scores `[10, 20, 35, 40, 55, 70, 85, 90]`,
you can “bin” them like this:

* 0–30 → Low
* 31–60 → Medium
* 61–100 → High


---

## Date and Unix Epoch:

###  What is the `Date` object in JavaScript?

* `Date` is a **built-in object** in JS used to work with **dates and times**.
* We can **create a new date** like this:

```js
const now = new Date();
console.log(now);
```

* Output (example):

```
Tue Nov 05 2025 00:15:20 GMT+0600 (Bangladesh Standard Time)
```

This gives the **current date and time** according to your system.

---

### What is Unix Epoch?

* Unix Epoch is a **reference point in time**:
  **January 1, 1970, 00:00:00 UTC**
* Unix time counts **how many seconds or milliseconds have passed since that moment**.

---

### Current time in **milliseconds** since Unix Epoch

```js
const now = Date.now(); // milliseconds since Jan 1, 1970 UTC
console.log(now);
```

* `Date.now()` returns a **number**, like `1710000000000`.
* This number means: **1,710,000,000,000 milliseconds have passed since Jan 1, 1970**.
* **Why milliseconds?** Because JS `Date` works with milliseconds internally.

---

### Current time in **seconds** (more common in Unix systems)

```js
const seconds = Math.floor(Date.now() / 1000);
console.log(seconds);
```

* `Date.now()` → gives **ms**
* Divide by 1000 → converts to **seconds**
* `Math.floor()` → removes the decimal part (we only want whole seconds)

Example output:

```
1710000000
```

---

### Convert **Unix time to a human-readable date**

```js
const unixTime = 1710000000; // seconds
const date = new Date(unixTime * 1000); // multiply by 1000 to convert seconds to ms
console.log(date.toUTCString());
```

Step by step:

1. `unixTime` is in **seconds**, but `Date` expects **milliseconds**, so we multiply by 1000.
2. `new Date(unixTime * 1000)` → creates a **Date object** representing that moment.
3. `toUTCString()` → converts the Date object into a **human-readable string in UTC time**.

Example output:

```
Fri, 08 Mar 2024 14:20:00 GMT
```

---

### Convert a **current date** to Unix time

```js
const now = new Date(); // current date object
const unixTime = Math.floor(now.getTime() / 1000);
console.log(unixTime);
```

Step by step:

1. `new Date()` → creates a Date object representing **current date/time**.
2. `getTime()` → returns **milliseconds since Unix Epoch** (same as `Date.now()`).
3. Divide by 1000 → convert to seconds.
4. `Math.floor()` → round down to whole seconds.

Example output:

```
1710000000
```

---

### Summary Table

| Task                       | Code                                    | Explanation                              |
| -------------------------- | --------------------------------------- | ---------------------------------------- |
| Get current date           | `new Date()`                            | Date object for current system date/time |
| Get current Unix time (ms) | `Date.now()`                            | Milliseconds since Jan 1, 1970           |
| Get current Unix time (s)  | `Math.floor(Date.now()/1000)`           | Seconds since Jan 1, 1970                |
| Convert Unix to date       | `new Date(unixTime*1000)`               | Multiply by 1000 because Date expects ms |
| Convert Date to Unix       | `Math.floor(new Date().getTime()/1000)` | Seconds since Unix Epoch                 |


## Demo showing how `toUTCString()`, `toISOString()`, and `toLocaleString()` behave for the **same date object** 

```javascript
const now = new Date();

console.log("Original Date Object:", now);
console.log("--------------------------------");
console.log("toUTCString():     ", now.toUTCString());
console.log("toISOString():     ", now.toISOString());
console.log("toLocaleString():  ", now.toLocaleString());
```

### Example Output (assuming local timezone = UTC+6)

```
 Original Date Object: 2025-11-06T08:45:30.123Z
--------------------------------
 toUTCString():      Thu, 06 Nov 2025 08:45:30 GMT
 toISOString():      2025-11-06T08:45:30.123Z
 toLocaleString():   11/6/2025, 2:45:30 PM
```

### What’s happening:

| Method             | Shows Time In       | Example Output                | Main Use                            |
| ------------------ | ------------------- | ----------------------------- | ----------------------------------- |
| `toUTCString()`    | UTC                 | Thu, 06 Nov 2025 08:45:30 GMT | Readable UTC format (e.g. for logs) |
| `toISOString()`    | UTC                 | 2025-11-06T08:45:30.123Z      | Precise format for APIs/databases   |
| `toLocaleString()` | Your local timezone | 11/6/2025, 2:45:30 PM         | For user-facing display             |

---

