const path = require("path");

const filePath = __filename;

console.log("\nCurrent file info:")
console.log("File path:", filePath);
console.log("Directory:", __dirname);


console.log("\n" + "-".repeat(120) + "\n");


console.log("Directory: ", path.dirname(filePath));
console.log("Base name:", path.basename(filePath));   // name + extension
console.log("File extension:", path.extname(filePath));   // extension only
console.log("File name:", path.basename(filePath, path.extname(filePath)));   // name only


console.log("\n" + "-".repeat(120) + "\n");


const parsedFilePathObject = path.parse(filePath);
console.log("Parsed object:\n", parsedFilePathObject);


console.log("\n" + "-".repeat(120) + "\n");


const formattedPathFromObject = path.format(parsedFilePathObject);
console.log("Formatted path:", formattedPathFromObject)