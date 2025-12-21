// Problem 7:
// Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// The function should handle arrays of strings or numbers.
// You are not allowed to use any built-in methods to solve this problem.
// Sample Input:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));
// Sample Output:
// [1, 2, 3, 4, 5, 6, 7];
// --------------------------------------------------------------------------------------------------


// -------------------------------------------- Solution --------------------------------------------

const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {

    const finalArray = [];
    let index = -1;

    const duplicateChecker = (arr: (string | number)[], currentValue: string | number): boolean => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === currentValue) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!duplicateChecker(finalArray, arr1[i])) {
            finalArray[++index] = arr1[i];
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!duplicateChecker(finalArray, arr2[i])) {
            finalArray[++index] = arr2[i];
        }
    }
    return finalArray;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));