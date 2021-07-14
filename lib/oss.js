'use strict';

const assert = require('assert');
// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
var COS = require('cos-nodejs-sdk-v5');
const { credential, sts } = require("../rules.js")
const tencentcloud = require("tencentcloud-sdk-nodejs");
const StsClient = tencentcloud.sts.v20180813.Client;
const isObject = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
const hasOwn = function (obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
function checkGenBucketConfig(rules, config) {
  let checks = Object.keys(rules);
  let options = {};
  assert(isObject(config), "config must be a Object")
  checks.forEach((v) => {
    if (config[v] && isObject(config[v])) {
      options[v] = checkGenBucketConfig(rules[v], config[v])
    } else {
      assert(hasOwn(config, v), `[tencent-oss] Must set ${v} in oss config`);
      options[v] = config[v];
    }
  })
  return options;
}
module.exports = app => {
  try {
    app.addSingleton('tencentOss', async (config, app) => {
      // 创建实例
      let options;
      if (isObject(config.sts)) {
        let { clientConfig, Name, Policy } = config.sts;
        checkGenBucketConfig(sts, config.sts);
        let client = new StsClient(clientConfig)
        let data = await client.GetFederationToken({
          Name,
          Policy: JSON.stringify(Policy)
        })
        try {
          var credentials = data.Credentials;
          if (!data || !credentials) return console.error('credentials invalid');
          options = {
            getAuthorization: function (option, callback) {
              callback({
                TmpSecretId: credentials.TmpSecretId,        // 临时密钥的 tmpSecretId
                TmpSecretKey: credentials.TmpSecretKey,      // 临时密钥的 tmpSecretKey
                SecurityToken: credentials.Token, // 临时密钥的 sessionToken
                ExpiredTime: data.ExpiredTime,               // 临时密钥失效时间戳，是申请临时密钥时，时间戳加 durationSeconds
              })
            }
          }
        } catch (e) {
          console.log("e", e)
        }
      } else {
        options = checkGenBucketConfig(credential, config.credential);
      }
      //console.log("options", options);
      return new COS(options);
    });
  } catch (error) {
    console.error(error, "tencent-oss")
  }
};
