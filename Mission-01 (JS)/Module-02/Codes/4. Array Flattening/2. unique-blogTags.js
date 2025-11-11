const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];


// -------------- Get the Unique Tags from the array ( O(n) ) --------------

const uniqueTags = tagsFromPosts.flat();   // O(n)
console.log(uniqueTags);

const set = [...new Set(uniqueTags)];  // O(n) + O(k)

console.log("Unique Tags: ", set);
