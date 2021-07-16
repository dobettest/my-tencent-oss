'use strict';
const {createSingleon}=require("../utils/oss")
module.exports = app => {
  try {
    app.addSingleton('tencentOss',createSingleon);
  } catch (error) {
    console.error(error, "tencent-oss")
  }
};
