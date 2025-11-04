const course1 = { name : "abc" };
const course2 = { name : "xyz" };

const map = new Map();

map.set(course1, {courseId : "mm"});
map.set(course2, {courseId : "nn"});

console.log(map);

// ----------------- map iteration ------------------
// ------- Way 1 --------
map.forEach((value, key) => {
    key.name = "test " + key.name; 
})

console.log(map);

// ------- Way 1 --------
for(let key of map.keys()) {
    key.name = "T " + key.name;
}
console.log(map);


// ----------------- map iterator ------------------
console.log([...map.keys()]);
console.log([...map.values()]);

