// Load the module necessary to operate on the file system (fs module)
const fs = require('fs');

// Asynchronously read the file
// If there is an error, log it to the console
fs.readFile(process.argv[2], (err, buffer) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // If there is not error, proceed to do operations on the file 

  // Convert buffer to string
  const fileText = buffer.toString();

  // Split the string by newline characters to count lines
  const lines = fileText.split('\n');

  // Display the number of new lines in the file
  // Subtract 1 because the number of new lines is one less than the number of lines
  console.log(lines.length - 1);
});
