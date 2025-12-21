// Sort

const fruits = ["Banana", "apple", "Cherry", "date"];


// ----------------- Capital Letter elements then Small Letter elements Order -------------------
const sortedFruitsArray1 = fruits.sort();
console.log(sortedFruitsArray1);


// ----------------- alphabetically (lexicographically) Order -------------------
const sortedFruitsArray2 = fruits.sort((f1, f2) => f1.localeCompare(f2));
console.log(sortedFruitsArray2);