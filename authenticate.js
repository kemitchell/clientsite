module.exports = function authenticate(email, password, callback) {
  process.nextTick(function() {
    callback(null, true) }) }
