var fs = require('fs')

module.exports = function home(request, response) {
  response.setHeader('content-type', 'text/html')
  fs.createReadStream('pages/index.html')
    .pipe(response) }
