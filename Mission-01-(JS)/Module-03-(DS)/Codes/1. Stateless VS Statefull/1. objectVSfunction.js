//* Stateless vs Stateful


// ------------------- Function (Stateless) -------------------
const counter = (amount) => {

    let count=0;

    count = count + amount;

    return count;
} 

console.log("Function Output: ");
console.log(counter(2));
console.log(counter(3));


// -------------------- Object (Stateful) --------------------
const counterObject = {
    count: 0,

    add(amount) {
        this.count = this.count + amount;  // this.count points to the inner lexical environment's value
        return this.count;
    }

}

console.log("Object Output: ");
console.log(counterObject.add(2));
console.log(counterObject.add(3));
