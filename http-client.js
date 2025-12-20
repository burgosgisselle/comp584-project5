// Loads in nodes http module from the node.js library
// this lets us use the http functions 
var http = require('http');

// Use the http.get function to make a GET request to the URL provided as the first command line argument 
// The function takes two arguments: the URL and a callback function that will be called with the response object
http.get(process.argv[2], function(response) {
    // Set the encoding of the response to UTF-8 so we can read the data as a readable string
    response.setEncoding('utf8')

    // Sends data to the console as it comes in as a stream
    response.on('data', console.log);
});