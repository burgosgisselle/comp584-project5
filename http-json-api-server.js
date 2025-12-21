    var http = require('http');
    // Imports the url module so that we are able to parse the URL
    var url = require('url');

    // Defines the port as the first command line argument
    var port = process.argv[2];
    // Creates the server and listens on port given
    var server = http.createServer(function (req, res) {
      // 'Parse' parses the URL into an object called parsedUrl
      // req.url is the URL that was requested
      // The 'true' argument makes it so that the query string is parsed into an object
      var parsedUrl = url.parse(req.url, true);
      // isoTime is defined as the query string 'iso' from the parsed URL 
      // This lets us access the time that was requested
      var isoTime = parsedUrl.query.iso;
      // Creates a new Date object from the isoTime
      var date = new Date(isoTime);
        // Checks if the URL path is '/api/parsetime' or '/api/unixtime'
        if (parsedUrl.pathname === '/api/parsetime') {
        var time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        // Writes the header to the response object where the status code is 200 and the content type is JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Converts the time object to a JSON string and sends it as the response body
        res.end(JSON.stringify(time));

        // If the URL path is '/api/unixtime' then it will return the unix time
      } else if (parsedUrl.pathname === '/api/unixtime') {        
        var unixTime = {
            unixtime: date.getTime()
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(unixTime));
      } 
    });
    server.listen(port);