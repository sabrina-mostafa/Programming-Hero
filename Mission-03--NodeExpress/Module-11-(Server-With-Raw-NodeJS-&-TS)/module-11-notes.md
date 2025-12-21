# Module-11


## Development Dependencies

This project uses **TypeScript** for development. The following packages are installed as dev dependencies:

```bash
npm install -D typescript ts-node @types/node
```

* **typescript** – TypeScript compiler to convert `.ts` files to `.js`.
* **ts-node** – Run TypeScript files directly without compiling.
* **@types/node** – Type definitions for Node.js built-in modules.

*These tools are required only during development.*

## `npx tsc --init` or `tsc --init`
- creates a `tsconfig.json` file
- `--init` creates a **`tsconfig.json`** file, which configures TypeScript for your project.
-  `npx` runs the local TypeScript compiler (`tsc`) without installing it globally.

## HTTP Module:
- `riteHead()`
 - writeHead() is a Node.js HTTP response method.
 - It is used to set the status code and response headers before sending data to the client.
- `res.end()` 
 - res.end() is a Node.js HTTP response method.
- It ends the response and sends the final data to the client.

## .ENV
- `.env values must NOT have semicolons`


## scripts on package.json

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "node node_modules/ts-node/dist/bin.js src/server.ts",
  "build": "node node_modules/typescript/bin/tsc"
}
```

### 1️⃣ `"test"`

```json
"test": "echo \"Error: no test specified\" && exit 1"
```

* This is a **default placeholder** npm script.
* When you run:

```bash
npm test
```

* It just prints:

```
Error: no test specified
```

* And exits. ✅ You can replace this later with **real tests** (like Jest, Mocha).


### 2️⃣ `"dev"`

```json
"dev": "node node_modules/ts-node/dist/bin.js src/server.ts"
```

### What this does:

1. `ts-node` lets you **run TypeScript files directly** without compiling first.
2. `src/server.ts` is your entry point (main file).
3. Running:

```bash
npm run dev
```

Will:

* Start the server
* Compile TypeScript **on the fly**
* Watch requests if you restart manually

### Important:

* `node node_modules/ts-node/dist/bin.js` is the **local path** to `ts-node`
* This avoids Node trying to find `ts-node` globally, which often fails on Windows + Node v24


### 3️⃣ `"build"`

```json
"build": "node node_modules/typescript/bin/tsc"
```

### What this does:

1. `tsc` is the **TypeScript compiler**.
2. Running:

```bash
npm run build
```

Will:

* Compile **all `.ts` files** in your project according to `tsconfig.json`
* Output **`.js` files** in the folder you set in `tsconfig.json` (usually `dist` or `build`)

### Key points:

* This is the **production-ready build**
* After `npm run build`, you can run your project using plain Node:

```bash
node dist/server.js
```

## ✅ How to use these scripts in **any TS project**

1. **Install dev dependencies**:

```bash
npm install -D typescript ts-node @types/node
```

2. **Set up `tsconfig.json`**:

```bash
npx tsc --init
```

3. **Add scripts in `package.json`**:

```json
"scripts": {
  "dev": "node node_modules/ts-node/dist/bin.js src/server.ts",
  "build": "node node_modules/typescript/bin/tsc"
}
```

4. **Run development server**:

```bash
npm run dev
```

5. **Build project for production**:

```bash
npm run build
```

6. **Run built JavaScript**:

```bash
node dist/server.js
```

## What is JSON.stringify()?

> JSON.stringify() is a JavaScript function that `converts a JavaScript object or array into a JSON string`.
- Input → JS object or array
- Output → string (JSON format)


## What is JSON.parse()?

> JSON.parse() is a JavaScript function that `converts a JSON string into a JavaScript object or array`.
- Input → string (must be valid JSON)
- Output → JS object or array


## why do we use JSON.stringify()?

> We use JSON.stringify() because JavaScript `objects and arrays cannot be sent directly over the network or stored` in certain formats—they need to be converted into a string format called JSON.


## **JSON** vs **JavaScript objects:**

### JavaScript object

```js
const user = {
  name: "Sabrina",
  age: 24,
  greet: function() { console.log("Hi"); }
};
```

* Can include a function (`greet`)
* Can be used directly in JS


### JSON string

```js
const jsonString = '{"name":"Sabrina","age":24}';
```

* Text format
* Cannot include functions
* Must be parsed to use as an object:

```js
const user = JSON.parse(jsonString);
console.log(user.name); // Sabrina
```


## req.on("data", callback)

- Event listener for each chunk of incoming data
- Fires multiple times if the body is large
- You collect the chunks to build the full request body

## req.on("end", callback)

- Event listener for when all chunks have been received
- Fires once, signaling that the request body is complete
- You can now parse or use the full body safely


## How to run server including continuous changes(Without turning the server On/Off again and again)
- command on terminal
 - `npm i -D  ts-node-dev`
- update package.json
 - `"dev": "node ./node_modules/ts-node-dev/lib/bin.js --respawn --transpile-only src/server.ts"`
