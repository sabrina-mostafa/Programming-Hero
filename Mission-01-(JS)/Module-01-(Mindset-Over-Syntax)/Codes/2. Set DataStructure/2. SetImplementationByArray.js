
// --------------- Array Implementation -----------------
// ----- Brute Force -------
const arr = [1, 2, 2, 4, 6, 6, 3];

const removeDuplicateArr = (array) => {
  const newArr = [];

  array.forEach((element) => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });

  return newArr;
};

console.log("Array: ", removeDuplicateArr(arr));



// --------------- Set Implementation -----------------

// ----- Way: 1 -----
const removeDuplicateSet1 = (arr) => {
  const set = new Set(arr);

  const newArr = Array.from(set);

  return newArr;
};

console.log("Set1: ", removeDuplicateSet1(arr));

// ----- Way: 2 -----
const removeDuplicateSet2 = (arr) => {
  return [...new Set(arr)];
};

console.log("Set2: ", removeDuplicateSet2(arr));
