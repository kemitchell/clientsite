var HTTPHash = require('http-hash')
var router = HTTPHash()

router.set('/sign-in', require('./sign-in'))
router.set('/sign-out', require('./sign-out'))
router.set('/', require('./home'))
router.set('*', require('./404'))

module.exports = router
