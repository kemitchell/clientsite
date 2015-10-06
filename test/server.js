module.exports = testServer

var http = require('http')
var handler = require('..')

function testServer(callback) {
  http.createServer(handler).listen(0, function() {
    callback(this.address().port, this.close.bind(this)) }) }
