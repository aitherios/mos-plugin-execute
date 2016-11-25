'use strict'
module.exports = jsToMarkdown

function jsToMarkdown (code) {
  return '```\n' + code + '\n```'
}
