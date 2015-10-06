var HTTPHash = require('http-hash')
var router = HTTPHash()

router.set('/login', require('./login'))
router.set('/logout', require('./logout'))
router.set('/', require('./home'))
router.set('*', require('./404'))

module.exports = router
