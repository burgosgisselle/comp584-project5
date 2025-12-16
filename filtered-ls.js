const fs = require('fs');

// Get the directory path and file extension from command line arguments
const dirPath = process.argv[2];
const fileExt = '.' + process.argv[3];

// Read the contents of the directory asynchronously
fs.readdir(dirPath, (err, files) => {
  if (err) {
    throw err;
  }

    // Check the filename one by one
    for (let i = 0; i < files.length; i++) {
        
        // If the file ends with the specified extension, print it to the console
        if (files[i].endsWith(fileExt)) {
            console.log(files[i]);
        }
    }
});