//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }


// ------------------------ Lookup Table (Way 1) ------------------------
const lookUpTable1 = postsArray.reduce((table, eachPost) => {
  const tempObject = {};
  tempObject[eachPost.id] = eachPost;

  console.log(tempObject);

  return Object.assign(table, tempObject);

}, {});

console.log("\nThe LookUp Table Output1: \n", lookUpTable1);


// ------------------------ Lookup Table (Way 2) ------------------------
const lookUpTable2 = postsArray.reduce((table, eachPost) => {

  table[eachPost.id] = eachPost;
  return table;

}, {});

console.log("\nThe LookUp Table Output2: \n", lookUpTable2);



// ------------------------ O(n) ------------------------

const showPost1 = postsArray.find((post) => {return post.id == "p-104"})   // O(n)
console.log("\nDesired Post1:", showPost1);

// ------------------------ O(1) ------------------------

const showPost2 = lookUpTable2["p-104"]
console.log("\nDesired Post2:", showPost2);    // O(1)