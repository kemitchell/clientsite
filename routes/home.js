var fs = require('fs')
var mustache = require('mustache')
var validSession = require('../valid-session')
var days = require('english-day-names')
var months = require('english-months')

var template = fs.readFileSync('pages/index.html').toString()
mustache.parse(template)

function longFormat(date) {
  return (
    days[date.getDay()] + ', ' +
    months[date.getMonth()] + ' ' +
    date.getDate() + ', ' +
    date.getFullYear() ) }

module.exports = function home(request, response) {
  validSession(request, function(error, valid, json) {
    if (error) {
      response.statusCode = 500
      response.end() }
    else {
      if (valid) {
        response.setHeader('Content-Type', 'text/html')
        response.end(
          mustache.render(template, {
            date: longFormat(new Date()),
            name: json.name })) }
      else {
        response.statusCode = 303
        response.setHeader('Location', '/sign-in')
        response.end() } } }) }
