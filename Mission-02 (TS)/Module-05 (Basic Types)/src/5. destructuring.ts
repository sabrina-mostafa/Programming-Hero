
// ------------------- Destructuring(Object, Array) -------------------

// Object Destructuring
const user = {
    id: 123,
    name: {
        firstName: "Safar",
        lastName: "Ali"
    },
    address: "CTG"
}
const myLastName = user.name.lastName;  // normally

const { id: myId } = user;  // Name Alias
console.log(myId);

const { name: {lastName} } = user;
console.log(lastName)



// Array Destructuring
const friends = ["Ally", "Bari", "Sara", "Bas"];

const [, , myFriend] = friends;  // Sara
console.log(myFriend);