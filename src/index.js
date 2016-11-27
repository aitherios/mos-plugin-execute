'use strict'
module.exports = plugin

const createExecuteRenderer = require('./create-execute-renderer')

function plugin (mos, markdown) {
  mos.scope.execute = createExecuteRenderer()
}

plugin.attributes = {
  pkg: require('../package.json')
}
