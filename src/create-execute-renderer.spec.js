'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const createExecuteRenderer = require('./create-execute-renderer')

describe('createExecuteRenderer', () => {
  const renderer = createExecuteRenderer()

  it('should generate output from `node -e "console.log(\'test\')"`', () => {
    return renderer('node', ['-e', '"console.log(\'test\')"'])
      .then(actual => {
        expect(actual).to.eq([
          '```',
          'test',
          '```',
        ].join('\n'))
      })
  })
})
