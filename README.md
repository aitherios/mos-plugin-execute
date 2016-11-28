<!--@'# ' + pkg.name-->
# mos-plugin-execute
<!--/@-->

<!--@'> ' + pkg.description-->
> Mos plugin to inline a process output
<!--/@-->

<!--@shields.flatSquare('npm')-->
[![npm version](https://img.shields.io/npm/v/mos-plugin-execute.svg?style=flat-square)](https://www.npmjs.com/package/mos-plugin-execute)
<!--/@-->

## Installation

```sh
npm install --save mos mos-plugin-execute
```

## Usage

We can load this file via the example plugin.
This mos plugin will execute the supplied command and inject it's output.

In the current `README.md` we have this code snippet:

```md
<!--@execute('echo', ['works'])-->
<!--/@-->
```

It produces this code block:

<!--@execute('echo', ['works'])-->
```default
works
```

## API

- `execute(command, args)`

## License

[MIT](./LICENSE) © [Renan Mendes Carvalho](https://github.com/aitherios)
