// ------------- Generating Huge DataSet -------------
const generateHugeData = (size) => {
  const itemPool = [1, 222, 3, 4, 55, 6, 7, 8, 99, 44];

  const generatedData = [];

  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * itemPool.length);
    generatedData.push(itemPool[randomIndex]);
  }

  return generatedData;
};

const hugeDataSet = generateHugeData(500000);

console.log("\nDataSet Size: ", hugeDataSet.length);


// ----------------- Using Array ---------------------

arrStartTime = performance.now();

const removeDuplicateArr = (arr) => {
    const uniqueArr = [];

    arr.forEach((element) => {
        if(!uniqueArr.includes(element)) {
            uniqueArr.push(element);
        }
    });

    return uniqueArr;
}
console.log("\nFor Array: ", removeDuplicateArr(hugeDataSet));

arrEndTime = performance.now();
console.log("\nArray Implementation took: ", arrEndTime-arrStartTime, "ms");

// ----------------- Using Set ---------------------

setStartTime = performance.now();

const removeDuplicateSet = (arr) => {
    const uniqueArr = [... new Set(arr)];

    return uniqueArr;
}
console.log("For Set: ", removeDuplicateSet(hugeDataSet));

setEndTime = performance.now();
console.log("\nSet Implementation took: ", setEndTime-setStartTime, "ms");
