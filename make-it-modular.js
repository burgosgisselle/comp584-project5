// Mymodule is a function since the module exported a function stored in mymodule
const mymodule = require('./mymodule');

// Accesses directory name
const dir = process.argv[2];

// Accesses extension
const ext = process.argv[3];

// provides the module with the directory and extension information
mymodule(dir, ext, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    // outputs file names
    for (let i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});