// Load the module necessary to operate on the file system (fs module)
const fs = require('fs');
// Allows for the file extenstion to be checked
const path = require('path');

// this function will receive a directory name and file extension from main program
module.exports = function (dir, ext, callback) {

    //Tells the filesystem to look inside the dir folder
    fs.readdir(dir, (error, files) => {
        if (error) {
            return callback (error);
        }

        // filer files by extension name
        const filterFiles = files.filter(file => {

            // since the user input doesnt include the '.', I added to the comparison
            return path.extname(file) == '.' + ext;
        });

        // If success, null is for the error (which wont exist) and returns the filtered list of files
        callback(null, filterFiles);
    });
};