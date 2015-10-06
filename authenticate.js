var readPasswords = require('./read-passwords')

module.exports = function authenticate(email, password, callback) {
  readPasswords(function(error, json) {
    if (error) {
      callback(error) }
    else {
      var match = (
        ( email in json ) &&
        ( json[email] === password ) )
      callback(null, match) } }) }
