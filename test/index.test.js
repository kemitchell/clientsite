var http = require('http')
var server = require('./server')
var tape = require('tape')

tape('GET /', function(test) {
  test.plan(2)
  server(function(port, close) {
    http.get({ path: '/', port: port }, function(response) {
      test.equal(
        response.statusCode, 303,
        'GET / responds 303')
      test.equal(
        response.headers.location, '/sign-in',
        'GET / redirects to sign in')
      close() }) }) })
