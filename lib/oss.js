'use strict';

const assert = require('assert');
// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
var COS = require('cos-nodejs-sdk-v5');
const { normal } = require("../rules.js")
const isObject = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
const hasOwn = function () {
  return Object.prototype.hasOwnProperty.call(arguments)
}
function checkBucketConfig(rules, config) {
  let checks = Object.keys(rules)
  assert(isObject(config), "config must be a Object")
  checks.forEach((v) => {
    if (config[v] && isObject(config[v])) {
      checkBucketConfig(rules[v], config[v])
    } else {
      assert(hasOwn(config,v), `[tencent-oss] Must set  ${v} in oss config`)
    }
  })
}
module.exports = app => {
  try {
    app.addSingleton('tencentOss', (config, app) => {
      // 创建实例
      checkBucketConfig(normal, config);
      return new COS(config);
    });
  } catch (error) {
    console.error(error, "tencent-oss")
  }
};
