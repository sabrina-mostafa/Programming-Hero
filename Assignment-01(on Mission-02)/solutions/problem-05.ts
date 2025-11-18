// Problem 5:
// Create a function filterActiveUsers that accepts an array of user objects. Each user object contains id, name, email, and isActive properties. The function should return a new array containing only the users whose isActive property is true.

// Requirements:
// You must write the correct type for the function parameter and the return type.
// Do not mutate the original array.
// Use type checking if necessary.
// Sample Input:
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));
// Sample Output:
// [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];
// --------------------------------------------------------------------------------------------------


// -------------------------------------------- Solution --------------------------------------------

interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (input: IUser[]): IUser[] => {
    
    return input.filter((eachUser) => eachUser.isActive === true)
}


const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));