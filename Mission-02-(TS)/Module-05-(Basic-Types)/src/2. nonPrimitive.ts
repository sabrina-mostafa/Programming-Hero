// NonPrimitive

// ---------------- Array ----------------
let bazarList : (string|Number)[] = ["a", "b", "c"];

bazarList.push('d');
bazarList.push(2);

console.log(bazarList)


// ---------------- Tuples ----------------
const myName : [string, string] = ["Sabrina", "Mostafa"]; 
console.log(myName);

const distance: [string, string, Number] = ["Chittagong", "Dhaka", 25];
console.log(distance);


// ---------------- Object ----------------
const user : {
    firstName: string;
    middleName?: string;  // Optional Type
    lastName: string
    isStudent: boolean;
    varsity: "varsityX";   // Literal Type
    readonly city: string;  // works as Literal Type
} = {
    firstName: "Sabrina",
    lastName: "Mostafa",
    isStudent: true,
    varsity: "varsityX",
    city: "CTG"
}

user.firstName = "SabrinaSabr";

console.log(user);
