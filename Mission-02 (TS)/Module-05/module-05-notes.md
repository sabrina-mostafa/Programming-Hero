# Module-05:

## What is Type Stripping?

> Type stripping means **removing** TypeScript **type** annotations (like :string, :number, interface, etc.) during the build/transpile process — so the **output is plain JavaScript**.

## What is NVM?

> **NVM** stands for **Node Version Manager**.
> It’s a command-line tool that lets you **install**, **switch**, and **manage multiple Node.js versions** on your computer.

### Why NVM is useful?

Imagine:

- One project needs **Node 16**
- Another project needs **Node 20**
  Normally, that’s a pain — but with **NVM**, you can easily switch between versions.

## Convert Typescript to Javascript(install Typescript):

- we need typescript compiler
- commands:
- npm install -g typescript (to install typescript globally)
- tsc --init (to create ts configuration file)
- tsc

## tsconfig.json file:

- tsconfig.json = TypeScript’s ruleBook
- It tells the compiler:
- “Where my code is, how to compile it, how strict to be, and what the output should look like.”

## Some Primitive Data Types:

- same type as Javascript (JS - TS)
- number, string, boolean, null, undefined
- only TS type
- never, unknown, void

## Some NonPrimitive(Reference) Data Types:

- Array, Object, {Tuples _(a special type of Array) -> [Fixed Length and Ordered Types]_ }
- optional type(?)
- Literal Type

### What is a Literal Type?

> A literal type means a type that **represents exactly one specific value**, _not just a general category of values_.

- when a value is used as a type

### Access Modifier (readonly)

- readonly can be also used for the same purpose.

### What is readonly?

> readonly means a property can be read but not changed after it’s been assigned.

- **as const** — Readonly Shortcut

* If you write as const, everything inside becomes readonly literal values.

```js
const colors = ["red", "green", "blue"] as const;
```

## Spread & Rest Operators in TypeScript (`...`)

> **Spread = unpack**, **Rest = pack**.

### **Spread Operator** — _Expands_ data

- Used to **unpack** elements from an array or object.
- Example:

```ts
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];
// [1, 2, 3, 4, 5]

const user = { name: "Sabrina", age: 22 };
const updatedUser = { ...user, city: "Dhaka" };
```

### **Rest Operator** — _Collects_ data

- Used to **gather** multiple values into an array or object.
- Example:

```ts
function sum(...numbers: number[]) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## Destructuring Objects/Array

- Name Alias(Objects)

## Type Alias

- type ObjectName { }
- type FunctionName ()

## Question Mark (?: / ?? / ?.)

### **1. Ternary Operator (`?:`)**

**Definition:**
A shorthand for `if...else` — returns one value if a condition is true, another if false.

**Example:**

```ts
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"
```

**When to use:**

- Use for short, single-line conditional checks.

### **2. Nullish Coalescing (`??`)**

**Definition:**
Returns the right-hand value **only if** the left-hand value is `null` or `undefined`.

**Example:**

```ts
const name = null ?? "Guest";
console.log(name); // "Guest"
```

**When to use:**

- Use to provide a default value **only** when something is `null` or `undefined` (not `0`, `""`, or `false`).

### **3. Optional Chaining (`?.`)**

**Definition:**
Safely access nested properties — returns `undefined` instead of throwing an error if a value is `null` or `undefined`.

**Example:**

```ts
const user = { profile: { name: "Sabrina" } };
console.log(user.profile?.name); // "Sabrina"
console.log(user.address?.city); // undefined
```

**When to use:**

- Use when you're not sure if an object or property exists.

## Undefiled VS Null

### **`undefined`**

**Meaning:**
Something exists, but **no value has been given yet.**

**Who sets it:**

- JavaScript itself — not you.

**Example 1:**

```ts
let name;
console.log(name); // undefined
```

Explanation:
You created a variable `name` but didn’t assign any value → so JavaScript automatically gives it `undefined`.

### **`null`**

**Meaning:**
You **intentionally set** a variable to say “there’s nothing here.”

**Who sets it:**

- You (the developer).

**Example 1:**

```ts
let user = null;
console.log(user); // null
```

Explanation:
You’re clearly saying: “Right now, there is no user.”
So, `null` means:

> “I know there’s nothing — I’m setting it on purpose.”

### **Simple Difference:**

| Situation                      | Example                | Meaning                                 |
| ------------------------------ | ---------------------- | --------------------------------------- |
| Variable declared but no value | `let x;` → `undefined` | JavaScript didn’t get a value           |
| Variable assigned empty value  | `let y = null;`        | Developer intentionally says “no value” |

## unknown vs any Type

- When to use unknown vs any
- Use unknown → when you don’t know the type yet and want **TypeScript to force checks before using** it.
- Use any → when you **don’t care about type** safety (rare in TypeScript projects, usually legacy code).
- Shortly we can say:
- **any**: _“Do whatever I want, TypeScript, I don’t care.”_ → **Unsafe**
- **unknown**: _“I don’t know the type yet, TypeScript, but force me to check before using.”_ → **Safe**

## never type

- this is the type of a function that will never return anything or will never end.

## nullable type:

> when we use _null as a type_
