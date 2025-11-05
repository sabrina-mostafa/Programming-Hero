// Sort

const numbers = [40, 100, 1, 5, 25, 10];


// ----------------- alphabetically (lexicographically) Order -------------------
const sortedNumberArray1 = numbers.sort();
console.log(sortedNumberArray1);


// ----------------- Ascending Order -------------------
const sortedNumberArray2 = numbers.sort((num1, num2) => num1 - num2);
console.log(sortedNumberArray2);


// ----------------- Descending Order -------------------
const sortedNumberArray3 = numbers.sort((num1, num2) => num2 - num1);
console.log(sortedNumberArray3);
