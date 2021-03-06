# rollup-plugin-svg-slim

[rollup](https://github.com/rollup/rollup) plug-in, read the svg file and use [svg-slim](https://github.com/benboba/svg-slim) to compress

## Installation

```js
npm install rollup-plugin-svg-slim -D
```

or

```js
yarn add rollup-plugin-svg-slim -D
```

## Configuration

The following is the schematic code in rollup.config.js

### Use default configuration

```js
import svgs from 'rollup-plugin-svg-slim';
export default ({
    ...
	plugins: [svgs()],
    ...
});
```

### Custom configuration

For custom configuration, please refer to the [documentation of svg-slim](https://github.com/benboba/svg-slim/blob/master/README-cn.md)

```js
import svgs from 'rollup-plugin-svg-slim';
export default ({
    ...
	plugins: [
        svgs({
            rules: {
                'shorten-decimal-digits': false,
                'shorten-id': false,
            },
            params: {
                sizeDigit: 2,
                angelDigit: 2,
            },
        }),
    ],
    ...
});
```
