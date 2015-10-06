var fs = require('fs')

module.exports = function styles(request, response) {
  response.setHeader('Content-Type', 'text/css')
  fs.createReadStream('static/styles.css').pipe(response) }
