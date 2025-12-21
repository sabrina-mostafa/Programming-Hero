const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "messy-files");
const organizedDir = path.join(__dirname, "output", "organized-files");

const categoryByExtension = {
    images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
    documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
    videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
    audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
    code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
    archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
    spreadsheets: [".xls", ".xlsx", ".csv"],
    others: [],
}

const allTestFiles = [
    "vacation.jpg",
    "report.pdf",
    "presentation.pptx",
    "music.mp3",
    "video.mp4",
    "script.js",
    "data.csv",
    "archive.zip",
    "photo.png",
    "notes.txt",
    "app.py",
    "movie.avi",
    "song.wav",
    "backup.tar.gz",
    "random.xyz",
    "nodejs.zip",
]

const initializeAllDirectories = () => {

    if (!fs.existsSync(sourceDir)) {      // Creates Folder -> "messy-files"
        fs.mkdirSync(sourceDir, { recursive: true });
    }

    allTestFiles.forEach((file) => {     // Creates all files under the Folder -> "messy-files"
        const sourcePath = path.join(sourceDir, file);
        if (!fs.existsSync(sourcePath)) {
            fs.writeFileSync(sourcePath, `Content of ${file}`);
        }
    })
    console.log("Messy-files Directory/Folder created Successfully!!");

    if (!fs.existsSync(organizedDir)) {     // Creates Folder -> "organized-files"
        fs.mkdirSync(organizedDir, { recursive: true });
    }

    Object.keys(categoryByExtension).forEach((category) => {    // Creates Folders of all category under the Folder -> "organized-files"
        const destinationPaths = path.join(organizedDir, category);
        if (!fs.existsSync(destinationPaths)) {
            fs.mkdirSync(destinationPaths)
        }
    });
    console.log("All the Category Folder of Organized Directory Created Successfully!!");
}


const getCategory = (fileName) => {     // Gets the specific Category of the current file
    const extensionOfCurrentFile = path.extname(fileName).toLowerCase();

    for (const [category, extensions] of Object.entries(categoryByExtension)) {
        if (extensions.includes(extensionOfCurrentFile)) {
            return category;
        }
    }
    return "others";
}


const organizeAllFiles = () => {
    console.log("file organizer \n");
    console.log("source: ", sourceDir);
    console.log("Destination: ", organizedDir);
    console.log("\n" + "-".repeat(50) + "\n");

    const ArrayOfAllFilesOfSrcDir = fs.readdirSync(sourceDir);   // reads all files or gives an array of all files in the sourceDir

    if (ArrayOfAllFilesOfSrcDir.length === 0) {   /// Checking if the source directory is empty or has no file
        console.log("No files to work on!!");
        return;
    }

    // An object to store the counting of files
    const stats = {
        totalFiles: 0,
        filesCountByCategory: {}
    }

    ArrayOfAllFilesOfSrcDir.forEach((file) => {
        const sourcePath = path.join(sourceDir, file);
        const stat = fs.statSync(sourcePath);

        if (stat.isDirectory()) {
            return;
        }

        const category = getCategory(file);
        const organizedPath = path.join(organizedDir, category, file);

        fs.copyFileSync(sourcePath, organizedPath);   // copies a file from source folder to destination folder

        stats.totalFiles++;
        stats.filesCountByCategory[category] = (stats.filesCountByCategory[category] || 0) + 1;

        console.log("fileName:", file);
        console.log("Category:", category);
        console.log("Size:", stat.size);
    })

    console.log(stats);
}

const showHelp = () => {
    console.log(`
        file organizer - usage:

        commands: 
        init - create all folders/files
        organize - organize files into categories by folders

        example:
        node file-organizer init
        node file-organizer organize
        `);
}


const command = process.argv[2];

// a flag to determine if the folders and files are initialized before organizing 
let isInitialized = fs.existsSync(sourceDir) && (fs.readdirSync(sourceDir).length != 0) && fs.existsSync(organizedDir) && (fs.readdirSync(organizedDir).length != 0) ;

switch (command) {
    case "init":
        initializeAllDirectories();
        isInitialized = true;
        break;
    case "organize":
        if (!isInitialized) {
            console.log("Firstly, you have to initialize files to organize!!");
            break;
        }
        organizeAllFiles();
        break;
    default:
        showHelp();
        break;
}