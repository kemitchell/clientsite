var routes = require('./routes')
var url = require('url')

module.exports = function handler(request, response) {
  var parsed = url.parse(request.url, true)
  var route = routes.get(parsed.pathname)
  var routeArguments = [
    request, response,
    route.params, route.splats,
    parsed.query ]
  route.handler.apply(null, routeArguments) }
