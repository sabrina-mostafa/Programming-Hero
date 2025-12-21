const course1 = { name: "abc" };
const course2 = { name: "xyz" };

const map = new Map();

map.set(course1, { courseId: "mm" });
map.set(course2, { courseId: "nn" });


// ---------------- Map to Array ---------------
// ------ entries ------
console.log(map.entries());


// ----------------  Array to Map ---------------
const courses = [
  [course1, { courseId: "mm" }],
  [course2, { courseId: "nn" }],
];

const myMap = new Map(courses);

console.log(myMap);
