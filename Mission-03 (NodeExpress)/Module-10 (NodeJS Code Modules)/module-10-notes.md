# Some Modules of Node.js:

## FS Module in Node.js:
> The fs (File System) module in Node.js lets you work with files and folders on your computer.
1. Read a File:
 - Synchronous (blocks code)
  - fs.readFileSync("file_name", "utf-8")
 - Asynchronous (non-blocking, recommended)
  - fs.readFile("file_name", "utf-8", (error, data)=> {})
2. Write a File:
 - Synchronous
  - fs.writeFileSync("file_name", content)
 - Asynchronous
  - fs.writeFile("file_name", content, (error) => {})
3. Append(Update/Add content) on an existing File:
 - fs.appendFileSync("file_name", content);
4. Common Methods:
- **fs.existsSync(path)** → Checks if a file or folder exists.
- **fs.mkdirSync(path, { recursive: true })** → Creates a folder (and parent folders if needed).
- **fs.readdirSync(path)** → Reads all files/folders in a directory. Returns an array of names.
- **fs.statSync(path)** → Gets file/folder details. Returns a Stats object.
- **stat.isDirectory()** → Checks if a path is a directory (from fs.statSync()).
- **fs.copyFileSync(src, dest)** → Copies a file from source to destination.

## Path Module in Node.js:
> The Node.js path module helps handle and manipulate file and directory paths across different operating systems.
- Key Methods:
 - **path.join()** → Join multiple path segments
 - **path.resolve()** → Resolve absolute paths
 - **path.basename()** → Get the file name
 - **path.dirname()** → Get the folder path
 - **path.extname()** → Get file extension
 - **path.parse()** → Parse path into components


## OS Module:
- os.uptime() → Computer uptime
 - Shows how long your computer (OS) has been running since last restart.
- process.uptime() → Node app uptime
 - Shows how long your Node.js program has been running since it started.
- What is os.networkInterfaces()?
 - It returns all network connections your computer has, such as: Wi-Fi, Ethernet,  Virtual adapters, Loopback (127.0.0.1), VPNs etc.


## Crypto Module:
1. **Encryption**
- let encrypted = cipher.update(text, "utf-8", "hex");
 - cipher.update(input[, inputEncoding][, outputEncoding])
2. **Decryption**
- let decrypted = decipher.update(encryptedData, "hex", "utf-8");
 - decipher.update(input[, inputEncoding][, outputEncoding])

## Dotenv:
- .env`*`
 - means .env/.env.production./.env.local..... etc.
- `require("dotenv").config();`
 - *dotenv is a package that loads environment variables from a .env file into process.env.*
 - *.config() reads the .env file and makes these variables available in Node.js through process.env.*