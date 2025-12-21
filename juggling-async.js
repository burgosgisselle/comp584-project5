var http = require('http');
var bl = require('bl');
// Array to store the results
var results = [];
// Counts the number of completed requests
var completedRequests = 0;

// This function is called three times with different indices (at the bottom it is called with 0, 1, and 2)
function argument(index) {
    http.get(process.argv[index + 2], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err);
            }
            // Store the result as a string
            results[index] = data.toString();
            // Increment the complete count
            completedRequests++;
            // Check if all requests are completed
            if (completedRequests === 3) {
                // Print the results in order   
                for (var i = 0; i < 3; i++) {
                    console.log(results[i]);
                }
            }
        }));
    });
}
// Call the argument function three times with different indices
for (var i = 0; i < 3; i++) {
    argument(i);
}