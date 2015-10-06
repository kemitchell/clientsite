var crypto = require('crypto')
var rfc6896 = require('rfc6896')

var CIPHER = 'AES-256-CBC'
var CIPHER_KEY = (
  ( 'CIPHER_KEY' in process.env ) ?
    new Buffer(process.env.CIPHER_KEY, 'hex') :
    crypto.randomBytes(32) )
var HMAC = 'SHA256'
var HMAC_KEY = ( process.env.HMAC_KEY || 'hmac_key' )
var TID = ( CIPHER + '-' + HMAC )
var MAX_AGE = ( 60 * 60 * 24 )

function encipher(argument, iv) {
  var cipher = crypto.createCipheriv(CIPHER, CIPHER_KEY, iv)
  cipher.update(argument)
  return cipher.final() }

function decipher(argument, iv) {
  var cipher = crypto.createDecipheriv(CIPHER, CIPHER_KEY, iv)
  cipher.update(argument)
  return cipher.final() }

function hmac(argument) {
  var hmac = crypto.createHmac(HMAC, HMAC_KEY)
  hmac.update(argument)
  return hmac.digest() }

function random() {
  return crypto.randomBytes(16) }

module.exports = rfc6896(TID, encipher, decipher, hmac, MAX_AGE, random)
