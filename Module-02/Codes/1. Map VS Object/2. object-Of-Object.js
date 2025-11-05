const course1 = { name : "abc" };
const course2 = { name : "xyz" };

const obj = {};

obj[course1] = {courseId : "mm"};
obj[course2] = {courseId : "nn"};

// takes the last assigned object
console.log(obj);