var fs = require('fs')
var validSession = require('../valid-session')
var trumpet = require('trumpet')

module.exports = function home(request, response) {
  validSession(request, function(error, valid, email) {
    if (error) {
      response.statusCode = 500
      response.end() }
    else {
      if (valid) {
        response.setHeader('content-type', 'text/html')
        var tr = trumpet()
        tr.select('span.email').createWriteStream().end(email)
        tr.pipe(response)
        fs.createReadStream('pages/index.html').pipe(tr) }
      else {
        response.statusCode = 303
        response.setHeader('location', '/sign-in')
        response.end() } } }) }
