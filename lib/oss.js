'use strict';

const assert = require('assert');
// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
var COS = require('cos-nodejs-sdk-v5');
const { normal } = require("../rules.js")
const isObject = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function checkBucketConfig(rules, config) {
  let checks = Object.keys(rules)
  assert(isObject(config), "config must be a Object")
  checks.forEach((v) => {
    if (config[v] && isObject(config[v])) {
      checkBucketConfig(rules[v], config[v])
    } else {
      assert(config[v], `[tencent-oss] Must set  ${rules[v]} in oss config`)
    }
  })
}
function createInstance(config, app) {
  // 创建实例
  checkBucketConfig(normal, config.normal);
  return new COS(config.normal);
};
module.exports = app => {
  try {
    app.addSingleton('tencentOss', createInstance(config, app));
  } catch (error) {
    console.error(error, "tencent-oss")
  }
};
