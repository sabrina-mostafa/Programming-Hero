
// ---------------- Normal Function ----------------
function addNormal(num1: number, num2: number): number {
    return num1+num2;
}
console.log(addNormal(2, 3));


// ---------------- Arrow Function ----------------
const addArrow = (num1: number, num2: number): number => {
    return num1+num2;
}
console.log(addArrow(5, 5));


// ---------------- Object Method ----------------
const poorUser = {
    name: "Safar",
    balance: 0,
    add(value: number) {
        return this.balance+value;
    } 
}
console.log(poorUser.add(55550));


// ---------------- CallBack Function ----------------
const arr: number[] = [1, 2, 3, 4, 5];

const squareArr = arr.map((element: number): number => {
    return element*element;
});
console.log(squareArr);