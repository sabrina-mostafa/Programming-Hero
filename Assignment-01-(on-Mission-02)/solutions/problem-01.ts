// Problem 1:
// Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:

// If the input is a string → return the string in uppercase
// If the input is a number → return the number multiplied by 10
// If the input is a boolean → return the opposite value (true → false, false → true)
// Requirements:
// You must write the correct type for the function parameter and the return type.
// You must use type checking to handle each case.
// Sample Input:
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));
// Sample Output:
// HELLO;
// 50;
// false;
// --------------------------------------------------------------------------------------------------


// -------------------------------------------- Solution --------------------------------------------

const formatValue = (value: string|number|boolean): string|number|boolean => {
    if(typeof value === "string") {
        return value.toUpperCase();
    }
    else if(typeof value === "number") {
        return value*10;
    }
    else {
        return !value;
    }
}

console.log(formatValue('hello'));
console.log(formatValue(50));
console.log(formatValue(true));