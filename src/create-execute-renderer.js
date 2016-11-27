'use strict'
var spawn = require('child_process').spawn

module.exports = () => {
  var resolvePromise
  var promise = new Promise(resolve => { resolvePromise = resolve })

  return (command, args) => {
    var output = ''
    var cmd = spawn(command, args, { shell: true })

    cmd.stdout.on('data', data => { output += `${data}` })
    cmd.stderr.on('data', data => { output += `${data}` })
    cmd.on('close', () => resolvePromise())

    return promise.then(() => ['```\n', output, '```'].join(''))
  }
}
