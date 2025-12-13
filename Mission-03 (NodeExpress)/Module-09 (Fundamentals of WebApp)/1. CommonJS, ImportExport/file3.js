const {a} = require("./file1");
const { a: x } = require("./file2");

const {add, subs} = require("./utils");  // Refers the index.js file of the utils folder


console.log(a, x);
console.log("Add Result:", add(a, x));
console.log("Subs Result:", subs(x, a));