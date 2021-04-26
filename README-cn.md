# rollup-plugin-svg-slim

[rollup](https://github.com/rollup/rollup) 的插件，读取 svg 文件并使用 [svg-slim](https://github.com/benboba/svg-slim) 进行压缩

## 安装

```js
npm install rollup-plugin-svg-slim -D
```

或者

```js
yarn add rollup-plugin-svg-slim -D
```

## 配置

以下为 rollup.config.js 中的示意代码

### 使用默认配置

```js
import svgs from 'rollup-plugin-svg-slim';
export default ({
    ...
	plugins: [svgs()],
    ...
});
```

### 自定义配置

自定义配置请参考 svg-slim 的[说明文档](https://github.com/benboba/svg-slim/blob/master/README-cn.md)

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
