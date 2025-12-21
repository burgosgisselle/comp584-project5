const http = require('http');
// Import the Transform class from the 'stream' module 
// This lets us modify data as it comes in
const { Transform } = require('stream');    
const server = http.createServer((req, res) => {
  // Allows only POST requests
  if (req.method === 'POST') {
    // Creates a new Transform stream object that will modify incoming data
    const transformStream = new Transform({
        // The transform function is called for each chunk of data that comes in
        transform(data, encoding, callback) {
        // Converts the chunk of data to a string, convert it to uppercase, and push it back into the stream
        this.push(data.toString().toUpperCase());
        // Signals that the transformation is complete for this chunk of data
        callback();
      }
    });
    // Pipes the incoming request data through the transform stream, and then pipes the transformed data to the response
    req.pipe(transformStream).pipe(res);
  }
});
// Starts the server and listens on the port given as the first command-line argument
server.listen(process.argv[2]);