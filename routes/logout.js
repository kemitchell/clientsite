var expiredCookie = (
  'content=deleted;' +
  ' path=/;' +
  ' expires=Thu, 01 Jan 1970 00:00:00 GMT' )

module.exports = function logout(request, response) {
  response.statusCode = 303
  response.setHeader('Set-Cookie', expiredCookie)
  response.setHeader('Location', '/login')
  response.end() }
