var fs = require('fs')

var FILE = ( process.env.PASSWORDS_FILE || 'passwords.json' )

module.exports = function authenticate(email, password, callback) {
  fs.readFile(FILE, function(error, buffer) {
    if (error) {
      callback(error) }
    else {
      var json = JSON.parse(buffer)
      console.log(email, password)
      console.log(json)
      var match = (
        ( email in json ) &&
        ( json[email] === password ) )
      console.log(match)
      callback(null, match) } }) }
