'use strict'
module.exports = plugin

const createProcessOutputRenderer = require('./create-process-output-renderer')

function plugin (mos, markdown) {
  mos.scope.processOutput = createProcessOutputRenderer(markdown)
}
