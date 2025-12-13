const fs = require("fs");

// -------------------- Written Synchronously --------------------
const content1 = "This is content no-01 \nthis is test-01";

try {
    fs.writeFileSync("../../data/write-sync.txt", content1);
    console.log("File written Synchronously");
}
catch (err) {
    console.error(err.message);
}


// -------------------- Written Asynchronously --------------------

const content2 = "This is content no-02 \nthis is test-02";

fs.writeFile("../../data/write-async.txt", content2, (err) => {
    if(err) {
        console.error(err.message);
    }
    console.log("File written Asynchronously");
});