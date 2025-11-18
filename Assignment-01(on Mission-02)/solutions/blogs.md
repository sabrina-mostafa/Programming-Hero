# TypeScript-এ Interface এবং Type: সহজভাবে বুঝে নিন

আপনি যদি TypeScript ব্যবহার করেন, তাহলে হয়তো খেয়াল করেছেন যে অনেক সময় interface এবং type নামে দুইটি জিনিস আছে। নতুনদের জন্য প্রথমে বোঝা একটু কঠিন মনে হতে পারে – এগুলো কি একই জিনিস নাকি আলাদা?

চলুন সহজভাবে বোঝা যাক।

### Interface কি?

Interface মূলত অবজেক্ট বা ক্লাসের স্ট্রাকচার নির্ধারণ করার জন্য ব্যবহার করা হয়। এটি বলে দেয়, আমাদের অবজেক্টে কোন কোন প্রপার্টি থাকবে এবং তার টাইপ কী হবে।
*Example:*
```ts
interface User {
  name: string;
  age: number;
}

const user1: User = {
  name: "Sabrina",
  age: 12
};
```
এখানে TypeScript নিশ্চিত করে, user1-এ অবশ্যই name এবং age থাকতে হবে।

### Type কি?

Type আরও সমৃদ্ধ (flexible)। এটি অবজেক্ট/ক্লাস ছাড়াও ইউনিয়ন(|) টাইপ, ইন্টারসেকশন(&) টাইপ, টুপল, ফাংশন টাইপ বা **প্রিমিটিভ টাইপ** তৈরি করতে পারে।
*Example:*
```ts
type ID = string | number;   // primitive 
type Point = [number, number];  // Tuple

type User = {    // object
  name: string;
  age: number;
};
```

## Interface এবং Type-এর পার্থক্য:
1. উদ্দেশ্য ও ব্যবহার
> Interface সাধারণত অবজেক্ট বা ক্লাসের স্ট্রাকচার নির্ধারণের জন্য ব্যবহার করা হয়। Type অবজেক্ট ছাড়াও ইউনিয়ন টাইপ, টুপল, প্রিমিটিভ টাইপ, ফাংশন টাইপ ইত্যাদি নির্ধারণের জন্য ব্যবহার করা যায়।
*Example:*
```ts
interface User {
  name: string;
  age: number;
}

type ID = string | number;
```

2. একাধিকবার ব্যবহার (Declaration Merging)
> Interface-এ একই নামে একাধিকবার ডিক্লেয়ার করলে TypeScript সেগুলো Merge করে দেয়, কিন্তু Type-এ একই নামে আবার ডিক্লেয়ার করলে Error দেয়।
*Example:*
```ts
interface User {
  name: string;
}
interface User {
  age: number;
}
const u: User = { name: "Alice", age: 25 }; // <<== works

type Person = { name: string };
type Person = { age: number }; // <<== Error
```

3. উত্তরাধিকার (Extending)
> Interface অন্য Interface বা Type এক্সটেন্ড করতে পারে। অপরদিকে Type এক্সটেন্ড করতে হলে & (intersection) ব্যবহার করতে হয়।
*Example:*
```ts
interface A { name: string }
interface B extends A { age: number } // interface extends interface

type X = { name: string }
type Y = X & { age: number } // type extends type
```


# TypeScript-এ any, unknown এবং never টাইপের পার্থক্য

TypeScript আমাদের কোডকে আরও নিরাপদ এবং ভুল থেকে মুক্ত করার জন্য শক্তিশালী টাইপ সিস্টেম দেয়। কিন্তু কখনও কখনও আমরা এমন পরিস্থিতিতে পড়ি, যেখানে আমরা ঠিক জানি না ভ্যালুটি কেমন হবে।
এক্ষেত্রে TypeScript আমাদের দেয় তিনটি শক্তিশালী টাইপ: **any**, **unknown**, এবং **never**।
চলুন সহজভাবে বুঝি এগুলো কী এবং কখন ব্যবহার করতে হয়।\

## 1. any টাইপ (সবকিছুতেই সন্তুষ্ট)
> any হলো TypeScript-এর সবচেয়ে ফ্লেক্সিবল টাইপ। এটি যেকোনো ধরনের(type) ভ্যালু গ্রহণ করতে পারে। এক্ষেত্রে TypeScript কোনো type চেকিং করে না।
*Example:*
```ts
let data: any;

data = 10;
data = "Hello";
data = true;

console.log(data); // TypeScript কোনো Error দেয় না
```
> **Note:** *any ব্যবহারের সময় TypeScript আপনাকে সতর্ক করে না, তাই এটি ব্যবহারে Type Safety হারায়।*

## 2. unknown টাইপ (অজানা কিন্তু নিরাপদ টাইপ)
> TypeScript-এ unknown হলো any এর জন্য নিরাপদ বিকল্প। এটিতেও any এর মতো যেকোনো ধরনের ভ্যালু থাকতে পারে। কিন্তু ব্যবহার করার আগে TypeScript, type চেক করে, যাতে আমরা ভুল type ব্যবহার না করি।
*Example:*
```ts
let value: unknown;

value = 10;
value = "Hello";

let str: string;

// str = value;         // Error: Type 'unknown' is not assignable to type 'string'

if (typeof value === "string") {
  str = value;     //  Safe
}
```
> **Note:** *unknown ব্যবহার করলে TypeScript আপনাকে টাইপ চেক করতে বাধ্য করে। ফলে কোড হয় নিরাপদ এবং বাগ-মুক্ত।*

## 3. never টাইপ (যা কখনো ঘটে না)
> never হলো এমন এক টাইপ যা কখনো কোনো মান ধারণ করে না। সাধারণত যে ফাংশন গুলো কোনো মান রিটার্ন করে না বা এ্যারর ছুড়ে দেয়, সেগুলোর type হলো never।
*Example:*
```ts
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```
> **Note:** *ever টাইপ মূলত বলে দেয়, "এই ফাংশন কখনো শেষ হবে না বা রিটার্ন করবে না।"*

### মনে রাখার সহজ টিপস:
- **any:** সবকিছু হতে পারে, সতর্কতা নেই।
- **unknown:** সবকিছু হতে পারে, কিন্তু আগে চেক করতে হবে।
- **never:** কিছুই ফেরত দেবে না, অথবা কখনো শেষ হবে না।