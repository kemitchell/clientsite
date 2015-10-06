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

tape('GET /Concourse-C6-Regular.woff', function(test) {
  test.plan(2)
  server(function(port, close) {
    http.get({ path: '/Concourse-C6-Regular.woff', port: port }, function(response) {
      test.equal(
        response.statusCode, 200,
        'GET /Concourse-C6-Regular.woff responds 200')
      test.equal(
        response.headers['content-type'], 'application/font-woff',
        'GET /Concourse-C6-Regular.woff serves WOFF')
      close() }) }) })

tape('GET /Concourse-T6-Regular.woff', function(test) {
  test.plan(2)
  server(function(port, close) {
    http.get({ path: '/Concourse-T6-Regular.woff', port: port }, function(response) {
      test.equal(
        response.statusCode, 200,
        'GET /Concourse-T6-Regular.woff responds 200')
      test.equal(
        response.headers['content-type'], 'application/font-woff',
        'GET /Concourse-T6-Regular.woff serves WOFF')
      close() }) }) })
