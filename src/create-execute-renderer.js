'use strict'
var spawn = require('child_process').spawn

module.exports = () => {
  return (command, args) => {
    var resolvePromise
    var promise = new Promise(resolve => { resolvePromise = resolve })
    var output = ''
    var cmd = spawn(command, args, { shell: true })

    cmd.stdout.on('data', data => { output += `${data}` })
    cmd.stderr.on('data', data => { output += `${data}` })
    cmd.on('close', () => resolvePromise())

    return promise.then(() => '```\n' + output + '```')
  }
}
