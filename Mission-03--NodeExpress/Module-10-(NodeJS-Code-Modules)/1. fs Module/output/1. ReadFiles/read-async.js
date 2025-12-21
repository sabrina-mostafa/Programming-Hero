
const fs = require("fs");

console.log("Reading started....");

fs.readFile("../../data/diary.txt", "utf-8", (err, data) => {
    if(err) {
        console.error("Error caught", err.message);
    }
    console.log("\nFile content:");
    console.log(data);
});

console.log("This runs immediately - No Blocking");
