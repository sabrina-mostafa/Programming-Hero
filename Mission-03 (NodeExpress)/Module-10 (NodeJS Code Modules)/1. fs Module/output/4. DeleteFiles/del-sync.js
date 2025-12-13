const fs = require("fs");

fs.writeFileSync("../../data/temp1.txt", "This is temp file - 01");
console.log("Temp file - 01 created");

if(fs.existsSync("../../data/temp1.txt")) {
    console.log("Temp-01 file exists!");

    fs.unlinkSync("../../data/temp1.txt");
    console.log("Temp-01 file Deleted");
}

try {
    fs.unlinkSync("../../data/temp1.txt")
}
catch(err) {
    console.log("ERROR:", err.message);
}