'use strict'
const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const createProcessOutputRenderer = require('./create-process-output-renderer')
const path = require('path')

describe('createProcessOutputRenderer', () => {
  const renderer = createProcessOutputRenderer({
    filePath: path.resolve(__dirname, './README.md'),
  })

  it('should generate output from a command', () => {
    return renderer()
      .then(actual => {
        expect(actual).to.eq([
          '```',
          'teste',
          '```',
        ].join('\n'))
      })
  })
  //
  // it('should replace relative require path with package name', () => {
  //   const example = createExampleRenderer({
  //     filePath: path.resolve(__dirname, './README.md'),
  //     pkg: require('./test/require-example/package.json'),
  //     pkgRoot: path.resolve(__dirname, './test/require-example'),
  //   })
  //
  //   return example('./test/require-example/example.js')
  //     .then(actual => {
  //       expect(actual).to.eq([
  //         '``` js',
  //         '\'use strict\'',
  //         'var fooBar = require(\'foo-bar\')',
  //         'console.log(fooBar)',
  //         '//> Hello world!',
  //         '```',
  //       ].join('\n'))
  //     })
  // })
  //
  // it('should replace relative import path with package name', () => {
  //   const example = createExampleRenderer({
  //     filePath: path.resolve(__dirname, './README.md'),
  //     pkg: require('./test/import-example/package.json'),
  //     pkgRoot: path.resolve(__dirname, './test/import-example'),
  //   })
  //
  //   return example.es6('./test/import-example/example.js')
  //     .then(actual => {
  //       expect(actual).to.eq([
  //         '``` js',
  //         "import fooBar from 'foo-bar'",
  //         'console.log(fooBar)',
  //         '//> Hello world!',
  //         '```',
  //       ].join('\n'))
  //     })
  // })
  //
  // it('should generate example from an es6 file', () => {
  //   return example.es6('./test/hello-world-example.es6.js')
  //     .then(actual => {
  //       expect(actual).to.eq([
  //         '``` js',
  //         "'use strict'",
  //         "var s = 'Hello world!'",
  //         'console.log(s)',
  //         '//> Hello world!',
  //         '```',
  //       ].join('\n'))
  //     })
  // })
})
