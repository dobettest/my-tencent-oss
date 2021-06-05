'use strict';

const tencentOss = require('./lib/oss');
module.exports = app => {
  tencentOss(app);
};
