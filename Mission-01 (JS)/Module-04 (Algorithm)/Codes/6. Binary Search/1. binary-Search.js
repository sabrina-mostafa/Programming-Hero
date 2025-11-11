// console.log(binarySearch([3, 5, 6, 7, 9, 11], 7)); // Output: 3

const binarySearch = (arr, target) => {
    const SearchArr = arr;
    let low=0, high=SearchArr.length-1;

    while(low <= high) {
        const mid=Math.floor((low+high)/2);

        if(SearchArr[mid]<target) {
            low = mid+1;
        }
        else if(SearchArr[mid]>target) {
            high = mid-1;
        }
        else {
            return mid;
        }
    }
    return -1;
}

console.log("Output:", binarySearch([3, 5, 6, 7, 9, 11], 7))
console.log("Output:", binarySearch([3, 5, 6, 7, 9, 11], 77))
console.log("Output:", binarySearch([3, 5, 6, 7, 9, 11], 11))

