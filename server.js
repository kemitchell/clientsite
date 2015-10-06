var handler = require('.')
var http = require('http')

var PORT = process.env.PORT || 8080

http.createServer(handler)
  .listen(PORT)
  .on('listening', function() {
    process.stdout.write('Listening on port ' + PORT + '\n') })
