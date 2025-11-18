# 1. What are some differences between interfaces and types in TypeScript?

## **⭐ Differences Between `interface` and `type` in TypeScript**

### **1. Declaration Merging**

* **Interface can merge** — multiple interfaces with the same name combine.
* **Type cannot merge** — duplicate type names cause an error.

**Example:**

```ts
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const user: Person = { name: "Sabrina", age: 22 }; // Works (merged)
```

```ts
type User = { name: string };
type User = { age: number }; // ❌ Error — duplicate type
```

### **2. Extending**

* **Interface extends** other interfaces *or* object types.
* **Type uses intersections (`&`)** to combine types.

**Example:**

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

```ts
type A = { x: number };
type B = { y: number };

type AB = A & B;  // Intersection
```

### **3. Flexibility**

* **Type** is more flexible:

  * Can represent **unions**, **tuples**, **primitives**, **function types**.
* **Interface** mainly describes **object shapes**.

**Example (type):**

```ts
type ID = string | number;   // Union  
type Point = [number, number]; // Tuple
type Callback = (msg: string) => void;
```

**Interface cannot do these.**

### **4. Convention**

* Use **interface** when describing **objects or class shapes**.
* Use **type** for **complex types**, like unions or utility types.


### **Summary**

* **Interface:** Extendable, mergeable, best for object structure.
* **Type:** More powerful, supports primitive, unions & intersections, no merging.

---

# 2. What is the use of the keyof keyword in TypeScript? Provide an example.

## **⭐ “What is the use of the `keyof` keyword in TypeScript?”**

**“`keyof` is used to get a union of all property names (keys) of a given object type.
It helps create more type-safe and reusable functions by restricting allowed keys.”**

### ** What `keyof` does**

* `keyof` takes an object type
* and returns a **union of its keys as string literals**.

### **Example:**

```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;
// PersonKeys = "name" | "age"
```

Now you can use it to make safer functions:

```ts
function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

const person = { name: "Sabrina", age: 22 };

getValue(person, "name"); // ✔ valid
getValue(person, "email"); // ❌ error: "email" is not a key of person
```

### **Interview-Perfect Summary**

**“`keyof` returns all keys of a type as a union.
It’s useful when you want to restrict inputs to valid property names and increase type-safety.”**

---

# 3. Explain the difference between any, unknown, and never types in TypeScript.

## **⭐ Difference Between `any`, `unknown`, and `never` in TypeScript**

### 1️⃣ **`any` – No Type Checking (Most Unsafe)**

* `any` disables type checking.
* You can assign anything to it, and you can do anything with it.
* TypeScript won't warn you about errors.

### **Example:**

```ts
let value: any = "Hello";

value = 10;        // ✔ allowed
value.toUpperCase(); // ✔ allowed (even if it's not a string)
```

**Use when:**
You don't care about type safety (not recommended).

### 2️⃣ **`unknown` – Type-Safe Version of `any`**

* `unknown` accepts any value **but you can’t use it without checking its type first**.
* More secure than `any`.

### **Example:**

```ts
let data: unknown = "Hello";

data = 20; // ✔ allowed

data.toUpperCase(); // ❌ Error: TypeScript doesn't know if it's a string.
```

You must narrow it:

```ts
if (typeof data === "string") {
  data.toUpperCase(); // ✔ Now allowed
}
```

**Use when:**
Data type is not known yet, but you want type safety.


### 3️⃣ **`never` – Never Returns Anything/Impossible Value**

* Represents a value that **never occurs**.
* Used for:

  * Functions that never return
  * Functions that always throw an error
  * Exhaustiveness checking in switch statements

### **Example (function that never returns):**

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

### **Example (infinite loop):**

```ts
function loopForever(): never {
  while (true) {}
}
```

**Use when:**
Something should be logically impossible.

### **Short Interview Summary**

* **`any`** → No type checking. You can do anything. *Unsafe.*
* **`unknown`** → Accepts any value but requires type checking before use. *Safe.*
* **`never`** → Represents impossible values. Used for functions that never return or unreachable code.

---

# 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

## ** ⭐ What is the use of enums in TypeScript?**

**Enums** in TypeScript are used to define a set of named constants.
They make your code **more readable, organized, and self-documenting**, especially when you have a fixed set of related values (like roles, directions, statuses, etc.).

### **1. Numeric Enum (Default)**

Numeric enums assign numbers to each member.
The first value starts at `0` automatically unless you set it manually.

### **Example:**

```ts
enum Direction {
  Up,        // 0
  Down,      // 1
  Left,      // 2
  Right      // 3
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

Or you can set numbers manually:

```ts
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}
```

### **2. String Enum**

String enums store **string values** instead of numbers.
These are more readable and helpful for debugging.

### **Example:**

```ts
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let role: UserRole = UserRole.Admin;
console.log(role); // Output: "ADMIN"
```

### **Interview-Perfect Summary**

“Enums allow TypeScript to group related constants under one name.
They improve readability and reduce errors.
Numeric enums use numbers (default), and string enums use more descriptive string values.”

---

# 5. Provide an example of using union and intersection types in TypeScript.

## ** ⭐ Union and Intersection Types in TypeScript**

### 1️⃣ **Union Type (`|`)**

A **union** type means a variable can be **one type OR another**.

### **Example:**

```ts
let value: string | number;

value = "Hello"; // ✔ allowed
value = 42;      // ✔ allowed
// value = true; // ❌ not allowed
```

### Another union example with functions:

```ts
function printId(id: string | number) {
  console.log("Your ID is:", id);
}

printId(101);      // ✔
printId("ABC123"); // ✔
```

### 2️⃣ **Intersection Type (`&`)**

An **intersection** type means a value must satisfy **multiple types at the same time**.

### **Example:**

```ts
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee; 
// Must have BOTH name and employeeId
```

```ts
const staffMember: Staff = {
  name: "Sabrina",
  employeeId: 1234
};
```

### **Interview-Ready Summary**

* **Union (`|`)** → A value can be **one type OR another**.
* **Intersection (`&`)** → A value must satisfy **ALL types combined**.

