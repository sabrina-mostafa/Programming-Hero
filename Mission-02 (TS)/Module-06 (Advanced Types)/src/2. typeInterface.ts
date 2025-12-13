// ---------------------- Object ----------------------

// type User = {
//     id: number;
//     name: string;
// }
interface IUser {
    id: number;
    name: string;
}


// type Role = {
//     userRole: "Admin" | "User";
// }

// type UserWithRole = User & Role;
interface IUserWithRole extends IUser {
    userRole: "Admin" | "User";
}


// const user1: User = {
//     id: 1,
//     name: "x"
// }
const user1: IUser = {
    id: 1,
    name: "x"
}

// const user2: User & Role = {
//     id: 2,
//     name: "y",
//     userRole: "Admin"
// }
const user2: IUserWithRole = {
    id: 2,
    name: "y",
    userRole: "Admin"
}
console.log(user2);



// ---------------------- Array ----------------------

// type Friends = string[];
interface IFriends {
    [index: number]: string;
}
const friends: IFriends = ["a", "b", "c"];
console.log(friends);


// ---------------------- Function ----------------------

type Add = (n1: number, n2: number) => number;
interface IAdd {
    (n1: number, n2:number): number;
}

// const add: Add = (num1, num2) => num1+num2;
const add: IAdd = (num1, num2) => num1+num2;

console.log(add(2, 3));