'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect

const jsToMarkdown = require('./js-to-markdown')

describe('jsToMarkdown', () => {
  it('should output a codeblock', () => {
    const js = [
      '//! comment',
      '',
      'void 0',
    ].join('\n')

    const md = jsToMarkdown(js)

    expect(md).to.eq("```\n//! comment\n\nvoid 0\n```")
  })
})
