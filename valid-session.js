var cookie = require('cookie')
var scs = require('./scs')
var readPasswords = require('./read-passwords')

module.exports = function validSession(request, callback) {
  if ('cookie' in request.headers) {
    var cookieString = request.headers.cookie
    var parsed = cookie.parse(cookieString)
    var content = parsed.content
    var decrypted
    try {
      decrypted = scs.inboundTransform(content).toString() }
    catch (exception) {
      setImmediate(function() {
        callback(null, false) }) }
    readPasswords(function(error, json) {
      if (error) {
        callback(error) }
      else {
        if (json.hasOwnProperty(decrypted)) {
          callback(null, true, json[decrypted]) }
        else {
          callback(null, false) } } }) }
  else {
    setImmediate(function() {
      callback(null, false) }) } }
