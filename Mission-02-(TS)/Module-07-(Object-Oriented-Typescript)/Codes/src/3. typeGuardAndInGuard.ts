

// ---------------- type guard -------------------

// ---------- typeof guard ----------
type AlphaNumeric = number|string  // just to clean code

const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
    if( typeof num1 === "number" && typeof num2 == "number")  // type guard
        return num1+num2;
    else {
        return num1.toString()+num2.toString();
    }
}
console.log(add(2, 3));
console.log(add(2, "3"));
console.log(add("5", 9));
console.log(add("6", "6"));


// ---------- in guard ----------
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: "Admin";
}

const userInfo = (user: NormalUser | AdminUser) => {
    if("role" in user) {   // in guard
        return `Name is: ${user.name} and role is: ${user.role}`;
    }
    else return `Name is: ${user.name}`;
}

console.log(userInfo({name:"Mr. X", role:"Admin"}));
console.log(userInfo({name:"Mr. Y"}));


