var HTTPHash = require('http-hash')
var fs = require('fs')
var path = require('path')

var router = HTTPHash()

var STATIC = [
  'styles.css',
  'Concourse-C6-Regular.woff',
  'Concourse-T6-Regular.woff' ]

router.set('/sign-in', require('./sign-in'))
router.set('/sign-out', require('./sign-out'))

STATIC.forEach(function(file) {
  var extension = path.extname(file)
  var mime = (
    ( extension === '.css' ) ?
      'text/css' :
      'application/font-woff' )
  router.set(( '/' + file ), function(request, response) {
    response.setHeader('Content-Type', mime)
    console.log(path.join('static', file))
    fs.createReadStream(path.join('static', file)).pipe(response) }) })

router.set('/', require('./home'))
router.set('*', require('./404'))

module.exports = router
