
class Counter {
    constructor(count) {       // holds the sate/value
        this.count = count;
    }

    add(amount) {              // method on prototype
        this.count +=amount;
        return this.count
    }

    print() {                       // method on prototype
        console.log(this.count);
    }
}

console.log("Counter1 Output: ");
const counter1 = new Counter(0); 

console.log(counter1.add(2));
console.log(counter1.add(3));

counter1.print();

console.log("\nCounter2 Output: ");
const counter2 = new Counter(10);

counter2.add(20);
counter2.add(30);

counter2.print();
