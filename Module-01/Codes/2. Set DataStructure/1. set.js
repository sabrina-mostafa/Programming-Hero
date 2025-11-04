const set = new Set();

const Sabrina = {userName: "Sabrina"};
const Sourav = {userName: "Sourav"};
const Sabr = {userName: "Sabr"};
const Mostafa = {userName: "Mostafa"};

// -------- add -----------
set.add(Sabrina);
set.add(Sourav);
set.add(Sabr);
set.add(Sourav);

// -------- has -----------
console.log(set.has(Sabr));

// -------- delete -----------
console.log(set.delete(Mostafa));

console.log(set);
console.log("Size: ", set.size);


// ------------------ Convert Set to Array ---------------------
const test = Array.from(set);
test.push({userName: "Newaz"});

console.log("\nTest Array: ", test);
