var cookie = require('cookie')
var scs = require('./scs')

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
    callback(null, true, decrypted) }
  else {
    setImmediate(function() {
      callback(null, false) }) } }
