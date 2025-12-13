const fs = require("fs");

fs.writeFile("../../data/temp2.txt", "This is temp file - 02", (err) => {
    if(err) return err.message;

    console.log("Temp file - 02 created");

    fs.unlink("../../data/temp2.txt", (err) => {
        if(err) {
            console.error("ERROR: ", err.message);
        }
        else {
            console.log("Temp-02 file Deleted");
        }
    })
});

