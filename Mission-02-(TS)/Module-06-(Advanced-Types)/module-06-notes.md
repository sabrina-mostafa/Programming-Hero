# Module-06:

## Type Assertion:

- **When Developers know a variable type better then the compiler can assume.**
> _When a variable's type is any or multiple and in between of the code if it can be sure by the developer that what will be the type among all the possible types! then developer sets the variable type._

## Type Interface:

- Similar to type Alias
- It can be user for only Object type data(array, object, function)
- We **can not use it in primitive types**

## Generics:

- Dynamically Generalize
- We user this to receive dynamic types/ to change the types dynamically

## Constraints:

- constraints are rules that restrict what types you can pass to generics.

## keyof Operator:

- It's a type operator, means **it will apply on types only**

## enum in TypeScript

- `enum` (enumeration) is a TypeScript feature used to define a **set of named constant values/Literals**.
- enum's value are constant, meaning we can't change them later anywhere.
- Enums exist at **runtime** (compiled to JavaScript objects).
- It can be _used for both types and values_.

### **Why use enums?**

- Prevents spelling mistakes
- Gives auto-complete
- Groups related constants
- Strong type checking

### How to run in node.js?

- node --experimental-transform-types "file_name"
- we have to user --experimental-transform-types because JS don't have enum type so it needs transformation

### Why Senior Developers don't like to user enum?

- because there is nothing called enum in JS, so while doing Transpile the compiler converts the simple enum(object) to an entire **IIFE(_Immediately Invoked Function Expression_) function**
- We **can use as const** instead of enums to avoid bundle size increment

## IIFE — Immediately Invoked Function Expression

- An IIFE is a function that runs immediately after it is created.

```js
(function () {
  console.log("I run immediately!");
})();
```

## Transpile:

- Transpile means converting source code **from one language version to another language** version at the same level of abstraction.

## as const Assertion:

- can be used instead of using enum

## Conditional Type:

- When a type is dependent to another type's condition.
- Conditional types in TypeScript allow us to define types based on a condition.

## Mapped Types:

- When a new type is created from existing type by looping.

## Utility Types:

Read from Typescript official Documentation:
Link: https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content[https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content]
