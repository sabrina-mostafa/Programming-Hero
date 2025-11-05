

const arr1 = Array.from({length:5}, );
console.log(arr1);

const arr2 = Array.from({length:5}, ).fill(0);  //  0/null/anyNumbers
console.log(arr2);

const arr3 = Array.from({length:5}, ( _, i) => i);
console.log(arr3);

const arr4 = Array.from([1, 2, 3, 4], ( value, i) => value*value);
console.log(arr4);