const args = process.argv;

// process.arg[0] = node path
// process.arg[1] = file path
// process.arg[2] = first actual argument

const name = args[2] || "Guest";

const time = new Date().getHours();
console.log(time);

let greetings;

if(time>0 && time<12) {
    greetings = "Good Morning";
}
else if(time>12 && time<18) {
    greetings = "Good Afternoon";
}
else {
    greetings = "Good Evening";
}

console.log(`${greetings} ${name}`);