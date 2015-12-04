var http = require('http')
var server = require('./server')
var tape = require('tape')

tape('GET /styles.css', function(test) {
  test.plan(2)
  server(function(port, close) {
    http.get({ path: '/styles.css', port: port }, function(response) {
      test.equal(
        response.statusCode, 200,
        'GET /styles.css responds 200')
      test.equal(
        response.headers['content-type'], 'text/css',
        'GET /styles.css serves CSS')
      close() }) }) })
