# Module-03:

## **Stateful vs Stateless**

* **Stateful:**

  * Remembers previous data or interactions.
  * Maintains state between operations.
  * **Object** is Stateful

* **Stateless:**

  * Does **not** remember past data.
  * Each request or action is independent.
  * **Function** is Stateless

---

## Lexical Environment:
- A lexical environment is the place where variables and functions live (are stored) and how JavaScript knows where to find them when your code runs.
 - It’s **created every time** a function, block, or script runs.

- Each Lexical Environment Has Two Parts:
 - **Environment Record** → stores all variables, functions, and parameters.
 - **Reference to Outer Lexical Environment** → tells JavaScript where to look next if a variable isn’t found locally.

---

## What Is a Pure Function?
- A pure function is a function that always gives the **same output for the same input** and does not cause any side effects (doesn’t modify anything outside itself).

---

## Closure:
- A closure is created when *a function remembers the variables from the place (scope) where it was originally defined*, *even after that scope has finished executing*.
- In other words:
 - A closure is a function that can access variables from its outer (parent) function — even after the parent function has returned.
- How it happens
 - **When you create a function inside another function, the inner one keeps a reference to the outer function’s variables — not a copy, but a live link.**
 - This is what forms the closure.

---

## this Keyword:
- **It indicates/refers.points the inner environment's variable/value.**
- When we deal with any value/function that is within the class/scope

---

## JavaScript Class:
* It is:
  1. stateful
  2. reproduce able

### **What is a Class?**
- A **class** is a blueprint for creating objects with **properties** (data) and **methods** (functions).

**Key Points:**
* **Constructor:** *Initializes/holds* object properties when a new object is created.
* **Methods:** Functions that belong to the class and can be used by all instances.
* **`new` keyword:** Used to create a new object from the class.

###  Example

```js
class Person {
  constructor(name, age) {
    this.name = name; // property
    this.age = age;   // property
  }

  greet() {          // method
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an object
const person1 = new Person("Sabrina", 22);
person1.greet(); // Hi, I am Sabrina and I am 22 years old.

const person2 = new Person("Alex", 30);
person2.greet(); // Hi, I am Alex and I am 30 years old.
```

---

## Stack:
 - LIFO

## Queue:
- FIFO

## Linked List:
- 
