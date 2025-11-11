// selectionSort([5, 3, 8, 4, 2]);

const selectionSort = (arr) => {
    const array = arr;

    for (let i = 0; i < array.length-1; i++) {   // array.length-1, just to ignore the last useless pass bcz if the (n-1) elements are sorted already then the last element is already on it's right place

        console.log("State of the array:", array);

        let minValueIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[minValueIndex] > array[j]) {
                minValueIndex = j;
            }
        }
        if (minValueIndex != i)
            [array[i], array[minValueIndex]] = [array[minValueIndex], array[i]];

        console.log(`After pass ${i + 1}:`, array);
    }
    return array;
}

console.log(selectionSort([5, 3, 8, 4, 2]))