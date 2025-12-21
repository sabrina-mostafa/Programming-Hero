const os = require("os");

console.log("System info: \n");
console.log("-".repeat(50));

console.log("Platform Details: ");
console.log("Platform: ", os.platform());
console.log("Architecture: ", os.arch());
console.log("OS type: ", os.type());
console.log("OS Release: ", os.release());
console.log("Hostname: ", os.hostname());


console.log("\nCPU info:\n ");
console.log("-".repeat(50));

const cpus = os.cpus();
console.log("Array of all CPU cores", cpus);
console.log("CPU Model : ", cpus[0].model);
console.log("Number of cores : ", cpus.length);
console.log("CPU Speed : ", cpus[0].speed);


const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log("\n" + "-".repeat(50));
console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log("Free Memory : ", (freeMem / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Used Memory : ", ((totalMem - freeMem) / 1024 / 1024 / 1024).toFixed(2), "GB");

const uptime = os.uptime();

const days = Math.floor(uptime / 86400);
const hours = Math.floor((uptime % 86400) / 3600);
const minutes = Math.floor((uptime % 3600) / 60);

console.log("\n" + "Computer UpTime or AwakeTime since last Restarted :" + "\n");
console.log("-".repeat(50));
console.log(`${days} days ${hours} hours ${minutes} minutes`);