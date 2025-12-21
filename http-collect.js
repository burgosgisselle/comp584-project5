var http = require('http');
// bl is a buffer list module that lets us collect multiple chunks of data from a stream 
var bl = require('bl');

http.get(process.argv[2], function(response) {
    // Collect all the data chunks from the response stream
    // Pipe takes the output of one stream and then sends it into the bl stream
    response.pipe(new bl(function(err, data) {
        if (err) {
            return console.error(err);
        }
        // Convert the collected data to a string and log it
        data = data.toString()
        console.log(data.length);
        console.log(data);
    }))
})