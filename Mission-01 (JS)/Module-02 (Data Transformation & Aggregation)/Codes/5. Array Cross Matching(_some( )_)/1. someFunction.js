
// Some


// ------------- Find is there any Even Number present or not -------------
const numbers = [1, 9, 3, 7, 5];
const hasEvenNumber = numbers.some((num) => (num % 2 == 0));
console.log(hasEvenNumber);


// ------------- Find that if the current User has the specific role access -------------
const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];


const canAccess = currentUserRoles.some((role) => {
    return featureAccessRoles.includes(role);
})

console.log(canAccess);