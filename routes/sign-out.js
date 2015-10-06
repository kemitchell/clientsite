var expiredCookie = (
  'content=deleted;' +
  ' path=/;' +
  ' expires=Thu, 01 Jan 1970 00:00:00 GMT' )

module.exports = function signOut(request, response) {
  response.statusCode = 303
  response.setHeader('set-cookie', expiredCookie)
  response.setHeader('location', '/sign-in')
  response.end() }
