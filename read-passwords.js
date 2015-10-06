var fs = require('fs')

var FILE = ( process.env.PASSWORDS_FILE || 'passwords.json' )

module.exports = function readPasswords(callback) {
  fs.readFile(FILE, function(error, buffer) {
    if (error) {
      callback(error) }
    else {
      callback(null, JSON.parse(buffer)) } }) }
