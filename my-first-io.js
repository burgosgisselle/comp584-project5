// Load the module necessary to operate on the file system (fs module)
const fs = require('fs');

// Store contents of file in a buffer
const buffer = fs.readFileSync(process.argv[2]);

// Convert buffer to string
const fileText = buffer.toString();

// Split the string by newline characters to count lines
const lines = fileText.split('\n');

// Display the number of new lines in the file
// Subtract 1 because the number of new lines is one less than the number of lines
console.log(lines.length - 1);
