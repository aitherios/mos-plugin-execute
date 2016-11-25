<!--@'# ' + pkg.name-->
# mos-plugin-process-output
<!--/@-->

<!--@'> ' + pkg.description-->
> Mos plugin to inline a process output
<!--/@-->

<!--@shields.flatSquare('npm')-->
[![npm version](https://img.shields.io/npm/v/mos-plugin-process-output.svg?style=flat-square)](https://www.npmjs.com/package/mos-plugin-process-output)
<!--/@-->

## Installation

```sh
npm install --save mos mos-plugin-process-output
```

## Usage

We can load this file via the example plugin.
This mos plugin will execute the supplied command and inject it's output.

In the current `README.md` we have this code snippet:

```md
<!--@processOutput('echo', ['works'])-->
<!--/@-->
```

It produces this code block:

<!--@processOutput('echo', ['works'])-->
```js
works
```

## API

- `processOutput(command, args)`

## License

[MIT](./LICENSE) © [Renan Mendes Carvalho](https://github.com/aitherios)
