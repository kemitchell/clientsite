var http = require('http')
var server = require('./server')
var tape = require('tape')

tape('GET /nonexistent', function(test) {
  test.plan(2)
  server(function(port, close) {
    http.get({ path: '/nonexistent', port: port }, function(response) {
      test.equal(
        response.statusCode, 404,
        'GET / responds 404')
      test.equal(
        response.headers['content-type'], 'text/html',
        'GET / serves HTML')
      close() }) }) })
