const fs = require("fs");

console.log("Reading started....");

try {
    const data = fs.readFileSync("../../data/diary.txt", "utf-8");
    console.log("\nFile content:");
    console.log(data);
}
catch(err) {
    console.error(err.message);
}

console.log("Reading finished....");
