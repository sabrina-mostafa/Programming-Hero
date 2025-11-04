const course1 = { name : "abc" };
const course2 = { name : "xyz" };
const course3 = { name : "pqr" };

const map = new Map();

map.set(course1, {courseId : "mm"});
map.set(course2, {courseId : "nn"});

console.log(map);

// ------------ size -------------
console.log("Size:", map.size);

// ------------ has -------------
console.log(map.has(course1));

// ------------ delete -------------
console.log(map.delete(course3))

// ----------- clear ------------
map.clear();
console.log(map);