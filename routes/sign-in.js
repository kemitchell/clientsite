var authenticate = require('../authenticate')
var cookie = require('cookie')
var scs = require('../scs')
var querystring = require('querystring')
var fs = require('fs')

function get(request, response) {
  response.setHeader('content-type', 'text/html')
  fs.createReadStream('pages/sign-in.html').pipe(response) }

var COOKIE_OPTIONS = { maxAge: ( 60 * 60 * 24 ) }

function userCookie(email) {
  var content = new Buffer(email, 'utf8')
  var encrypted = scs.outboundTransform(content)
  return cookie.serialize('content', encrypted, COOKIE_OPTIONS) }

function redirect(response, to) {
  response.statusCode = 303
  response.setHeader('location', to)
  response.end() }

function post(request, response) {
  var body = ''
  request
    .on('data', function(buffer) {
      body += buffer.toString() })
    .on('end', function() {
      var formData = querystring.parse(body)
      var validFormData = (
        ( 'email' in formData ) &&
        ( 'password' in formData ) )
      if (!validFormData) {
        response.statusCode = 400
        response.end() }
      else {
        var email = formData.email
        var password = formData.password
        authenticate(email, password, function(error, valid) {
          if (error) {
            response.statusCode = 500
            response.end() }
          else {
            if (valid) {
              response.setHeader('set-cookie', userCookie(email))
              redirect(response, '/') }
            else {
              redirect(response, '/sign-in') } } }) } }) }

function invalid(request, response) {
  response.statusCode = 405
  response.end() }

module.exports = function signIn() {
  var request = arguments[0]
  if (request.method === 'GET') {
    get.apply(this, arguments) }
  else if (request.method === 'POST') {
    post.apply(this, arguments) }
  else {
    invalid.apply(this, arguments) } }
