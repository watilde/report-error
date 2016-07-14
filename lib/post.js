var opener = require('opener')
var template = require('lodash.template')
var fs = require('fs')
var md = fs.readFileSync('./template.md', 'utf8')
var message = template(md)
var endpoint = 'https://github.com/npm/support-cli/issues/new?body='

module.exports = function (answers) {
  var body = message(answers)
  opener(endpoint + body)
}