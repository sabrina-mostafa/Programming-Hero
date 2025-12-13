
const crypto = require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //not recommended bcz it's very fast
const md5Hash2 = crypto.createHash("md5").update("password123").digest("hex");
console.log("input: password123");
console.log("MD5 HashedPassword: ", md5Hash);
console.log("MD5 Hash2 : ", md5Hash2);

const sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("\ninput: password123");
console.log("SHA256 HashedPassword: ", sha256Hash);

const sha512Hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("\ninput: password123");
console.log("SHA512 HashedPassword: ", sha512Hash);

