'use strict'
const path = require('path')
var spawn = require('child_process').spawn
const jsToMarkdown = require('./js-to-markdown')

module.exports = opts => {
  var resolve
  var promise = new Promise(function(r){
    resolve = r
  })

  console.log('!!!!!!!!!!!!!', opts)

  return (opt) => {
    console.log('!################', opt)
    resolve()
    return promise
  }
}
