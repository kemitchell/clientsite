var fs = require('fs')

module.exports = function notFound(request, response) {
  response.statusCode = 404
  response.setHeader('content-type', 'text/html')
  fs.createReadStream('pages/404.html').pipe(response) }
