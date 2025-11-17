// static = same memory allocation

class Counter {
    static count: number = 0;

    increment() {
        return ++Counter.count;
    }
    static decrement() {
        return --Counter.count;
    }
}

const counter1 = new Counter();
console.log(counter1.increment());
console.log(counter1.increment());

const counter2 = new Counter();
console.log(counter2.increment());
console.log(counter2.increment());

console.log(Counter.decrement());
console.log(Counter.decrement());