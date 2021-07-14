# my-tencent-oss
[npm-url]: https://www.npmjs.com/package/tencent-oss

Egg's tencent-oss plugin.

## Install

```bash
$ npm i tencent-oss --save
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
  config.tencentOss = {
    clients: {
      cos1: {
        credential: {
          SecretId: '',
          SecretKey: ''
        }
      },
      cos2: {
        sts: {
          clientConfig: {
            credential: {
              secretId: 'AKIDd4FBsKHgeP1PcaEkxyjETSCgusd8NxJQ',
              secretKey: '1nKhogIeldGdp69xXsypQ1Tm1YFk02qP'
            },
            region: "ap-guangzhou",
            profile: {
              httpProfile: {
                endpoint: "sts.tencentcloudapi.com",
              },
            },
          },
          "Name": "access",
          Policy: {
            "version": "2.0",
            "statement": [
              {
                "effect": "allow",
                "action": [
                  "cos:PutObject",
                  "cos:GetObject",
                  "cos:HeadObject",
                  "cos:OptionsObject",
                  "cos:ListParts",
                  "cos:GetObjectTagging"
                ],
                "resource": "*"
              }
            ]
          }
        }
      }
    }
  };
```

## Questions & Suggestions

Please open an issue [here](https://github.com/dobettest/my-tencent-oss.git/issues).

## License

[MIT](LICENSE)
