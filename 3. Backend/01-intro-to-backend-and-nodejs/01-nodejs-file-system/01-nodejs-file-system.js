const fs = require("fs");

// Write file
fs.writeFileSync("./01-file-system/notes.txt", "Hello, there!");

// Read file
const content = fs.readFileSync("notes.txt", "utf-8");
console.log(content);
