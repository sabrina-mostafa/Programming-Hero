# Module-04:


## .reverse()
 - It's a method of **Array**
 - string.reverse() **->  NOT VALID**

## .split("")
- splits and converts it/container to an array

## str.replace(/[^a-z0-9]/g, "");
 - **/[^a-z0-9]/g** -> *called regular expression (short: regex)*
 - str.replace(...);
 - str.replace(//g, "");
  - Everything **inside the slashes / /** is the pattern **you want to match**.
  - g at the end
    - The g stands for global — meaning:
    - *Do this replacement for every match in the entire string, not just the first one.*
    - **Without g, it would replace only the first special character.**
  - str.replace(/[^...]/g, "")
  - [] means “a set of allowed characters.”
  - here, **^** is the **NOT** operation
  - **^ (inside brackets) means “NOT these characters.”**
 - str.replace(/[a-zA-Z0-9]/g, "");
  - all letters and digits
 - str.replace(/[^a-zA-Z0-9]/g, "")
  - replace with "" except all letters and digits.

---

## What is In-place Sorting?
- In-place sorting means:
 - The sorting algorithm rearranges the elements within the same array (or data structure) without using extra space proportional to the input size.
 - In simpler terms:
   - The algorithm **doesn’t create a new array** to store sorted data.
   - It just modifies the existing array, often using swaps.

## Selection Sort()
- move the smallest value from the unsorted array(right-side) to the sorted array(left-side)
- select the minimum value of the unsorted array and place it to it's right position
- O(n) in both worst and best case

## Insertion Sort()
- worst case
 - O(n^2)
- best case
 - O(n)

---

## What is **Adaptive Sorting**?

> A **sorting algorithm is adaptive** if it takes advantage of **existing order (sortedness)** in the input data to **reduce the total work** it has to do.

In other words:

* If the array is **already partly sorted**,
* The algorithm **runs faster** than in the worst case.

### Example

Let’s say we want to sort this array:

```js
[1, 2, 3, 7, 5, 6, 8]
```

This array is *almost sorted* — just two numbers are out of place.

An **adaptive sorting algorithm** will notice that and sort it **faster** than sorting a completely random array.

### Example: Insertion Sort (Adaptive)

Insertion Sort is a **classic adaptive algorithm**.

### Case 1: Already sorted array

```js
const arr = [1, 2, 3, 4, 5];
```

Insertion Sort takes **O(n)** time — because each element is already in place.

### Case 2: Random array

```js
const arr = [5, 3, 4, 1, 2];
```

Now it takes **O(n²)** — because it must compare and move many elements.

* That’s why it’s called **adaptive** — it *adapts* to how sorted the input is.


### Summary Table

| Algorithm                          | Adaptive? | Average Case | Best Case (Nearly Sorted) |
| ---------------------------------- | --------- | ------------ | ------------------------- |
| **Insertion Sort**                 | ✅ Yes     | O(n²)        | O(n)                      |
| **Bubble Sort**                    | ✅ Yes     | O(n²)        | O(n)                      |
| **Merge Sort**                     | ❌ No      | O(n log n)   | O(n log n)                |
| **Quick Sort**                     | ❌ No      | O(n log n)   | O(n log n)                |
| **TimSort** (used in JS `.sort()`) | ✅ Yes     | O(n log n)   | O(n)                      |


### Fun fact:

> Modern JavaScript engines (like V8, Chrome, Node.js) use **TimSort** for `Array.prototype.sort()` —
and **TimSort** is **adaptive**, combining **Merge Sort + Insertion Sort** for optimal performance.


