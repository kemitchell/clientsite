var HTTPHash = require('http-hash')
var router = HTTPHash()

router.set('/', require('./home'))
router.set('*', require('./404'))

module.exports = router
