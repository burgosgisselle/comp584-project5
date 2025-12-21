const net = require('net'); 

// This function formats the date and time in the required format
function dateFormat(i) {
  const date = new Date(i);
  const year = date.getFullYear();

  // 'Pad Start' adds a leading zero if necessary with '2' being the target length and '0' being the padding character
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// creates a TCP server
var server = net.createServer(function(socket) {
  // Sends the current date and time in the specified format as the function above
  socket.end(dateFormat(new Date()) + '\n');
});
// Server listens on the port provided by the first command line argument
server.listen(process.argv[2]);