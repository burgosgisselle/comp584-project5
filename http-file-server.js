const http = require('http');
const fs = require('fs');

// Port and file path are provided as command-line arguments
const port = process.argv[2];
const filePath = process.argv[3];

// Creates a HTTP server that reads the file and pipes it to the response
const server = http.createServer((req, res) => {
    // Takes the file path and creates a readable stream from it
    const fileStream = fs.createReadStream(filePath);
    // Pipes the file stream to the response object
    fileStream.pipe(res);
});
server.listen(port);