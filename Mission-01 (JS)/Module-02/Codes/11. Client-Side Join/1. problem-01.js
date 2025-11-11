//* Denormalizing Data (Client-Side "Join")

// Scenario: You have an array of users and a separate array of posts.
// You want to create a new array of users where each user object contains a posts array of their own posts.

//? input
const users = [
  { id: 101, name: "Alice" },
  { id: 102, name: "Bob" },
  { id: 103, name: "Charlie" },
];

const posts = [
  { id: 1, userId: 102, title: "My first post" },
  { id: 2, userId: 101, title: "React Hooks" },
  { id: 3, userId: 101, title: "Data Structures" },
  { id: 4, userId: 103, title: "CSS is fun" },
  { id: 5, userId: 102, title: "Node.js streams" },
];

//? output
// [
//   { id: 101, name: 'Alice', posts: [ { id: 2, ... }, { id: 3, ... } ] },
//   { id: 102, name: 'Bob', posts: [ { id: 1, ... }, { id: 5, ... } ] },
//   { id: 103, name: 'Charlie', posts: [ { id: 4, ... } ] }
// ]



// --------------------------- Way 01 (mine!) ---------------------------

// const postByUserId1 = posts.reduce((lookUpTable, eachPostsObject) => {
//   const { userId } = eachPostsObject;

//   if (!lookUpTable[userId]) {

//     lookUpTable[userId] = { posts: [eachPostsObject] };
//   }
//   else {
//     lookUpTable[userId] = { posts: [...lookUpTable[userId].posts , eachPostsObject] };
//   }
  
//   return lookUpTable;
// }, {});
// // console.dir(postByUserId1, { depth: null });

// const userWithPosts1 = users.map((user) => {
//     return {
//         ...user,
//         ...postByUserId1[user.id]
//     }
// })
// console.dir(userWithPosts1, { depth: null });





// --------------------------- Way 02 (Better) ---------------------------

const postByUserId = posts.reduce((lookUpTable, eachPostsObject) => {
  const { userId } = eachPostsObject;

  if(!lookUpTable[userId]) {

    lookUpTable[userId] = [];
  }
  lookUpTable[userId].push(eachPostsObject);
  
  return lookUpTable;
  
}, {});
// console.log(postByUserId);

const userWithPosts = users.map((user) => {  // O(n)
    return {
        ...user,
        posts: postByUserId[user.id] || []   // O(1)
    }
})

console.dir(userWithPosts, { depth: null });


