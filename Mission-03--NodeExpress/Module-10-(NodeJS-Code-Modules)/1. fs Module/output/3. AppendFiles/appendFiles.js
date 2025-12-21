const fs = require("fs");

// fs.writeFileSync("../../data/fileToAppend.log", "Application Started.....");
// console.log("File Created");

// const logEntry1 = `\n${new Date()} user logged in\n` ;
// fs.appendFileSync("../../data/fileToAppend.log", logEntry1);

const logEntry2 = `\n${new Date().toDateString()} Data fetched\n` ;
fs.appendFileSync("../../data/fileToAppend.log", logEntry2);

const logEntry3 = `\n${new Date().toISOString()} user logged in\n` ;
fs.appendFileSync("../../data/fileToAppend.log", logEntry3);


console.log("Task Finished");