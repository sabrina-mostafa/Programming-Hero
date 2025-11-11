
// ------------------- Way 01 (Recommended) ------------------------

const startTime = performance.now();

for(let i=1; i<=1e7; i++) {
    // console.log(i);
}

const endTime = performance.now();

console.log("This code took: ", endTime-startTime, "ms\n");



// ------------------- Way 02 ------------------------

console.time("task");

for(let i=1; i<=1e7; i++) {
    // console.log(i);
}

console.timeEnd("task");