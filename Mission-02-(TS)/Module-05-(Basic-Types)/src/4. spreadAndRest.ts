
// ---------------- Spread Operator ----------------

// in Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

// in Object
const user = {
    name: "Rabia",
    id: 22,
};
const address = {
    city: "CTG",
    zipCode: 12343,
};

const userInfo = { ...user, ...address };
console.log(userInfo);



// ---------------- Rest Operator ----------------
const sendInvitation = (...friends: string[]) => {
    friends.map((friend) => console.log(`Send invitation to: ${friend}`));
};
sendInvitation("Safa", "Afia", "Lamia", "Razia");
