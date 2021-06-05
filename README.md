# my-tencent-oss
[![NPM version][npm-image]][npm-url]

[npm-url]: https://npmjs.org/package/my-tencent-oss

Egg's tencent-oss plugin.

## Install

```bash
$ npm i my-tencent-oss --save
```

## Configuration

Change `{app_root}/config/plugin.js` to enable `my-tencent-oss` plugin:

```js
exports.tencentOss = {
  enable: true,
  package: 'my-tencent-oss',
};
```

### Config

```js
// {app_root}/config/config.default.js
exports.tencentOss = {
    client: {
      SecretId: 'AKIDd4FBsKHgeP1PcaEkxyjETSCgusd8NxJQ',
      SecretKey: '1nKhogIeldGdp69xXsypQ1Tm1YFk02qP'
    }
  };
```

## Questions & Suggestions

Please open an issue [here](https://github.com/dobettest/my-tencent-oss.git/issues).

## License

[MIT](LICENSE)
