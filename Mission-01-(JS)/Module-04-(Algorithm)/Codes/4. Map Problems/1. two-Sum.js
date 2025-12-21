// Problem Statement

// Given an array of integer numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)


const arr = [2, 11, 7, 15];

const twoSum = (arr, target) => {
    const map = new Map();

    for(let index=0; index<arr.length; index++) {
        const currentNumber = arr[index];

        if(map.has(currentNumber)) {
            // console.log("get: ", map.get(currentNumber), ",", index);
            return [map.get(currentNumber), index];
        }
        else {
            // console.log("test:", currentNumber);
            map.set(target-currentNumber, index);
        }
    }
    return undefined;
}

console.log(twoSum(arr, 9));
console.log(twoSum(arr, 99));
console.log(twoSum(arr, 17));
