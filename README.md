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
              secretId: '',
              secretKey: ''
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
### express
```js
//configure
const oss=require("tencent-oss");
app.use(new oss({
        cos1: {
        credential: {
          SecretId: '',
          SecretKey: ''
        }
      }
}))
//use
req.tencentOSS.get("cos1")
```
## Questions & Suggestions

Please open an issue [here](https://github.com/dobettest/my-tencent-oss.git/issues).

## License

[MIT](LICENSE)
