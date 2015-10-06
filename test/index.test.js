var http = require('http')
var server = require('./server')
var tape = require('tape')

tape('GET /', function(test) {
  test.plan(2)
  server(function(port, close) {
    http.get({ path: '/', port: port }, function(response) {
      test.equal(
        response.statusCode, 200,
        'GET / responds 202')
      test.equal(
        response.headers['content-type'], 'text/html',
        'GET / serves HTML')
      close() }) }) })
