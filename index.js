const { createSingleon } = require('./utils/oss')
const { isObject } = require("./utils")
function tencentOSS() {
    this.clients = {};
}
tencentOSS.prototype.get = function (key) {
    try {
        return this.clients[key]
    } catch (error) {
        throw new Error("no such client");
    }
}
module.exports = function (config) {
    if (!isObject(config)) {
        throw new Error("config must be a object")
    }
    let keys = Object.keys(config);
    let oss = new tencentOSS()
    keys.forEach(key => {
        oss.clients[key] = createSingleon(config[key])
    })
    return async function (req, res, next) {
        req.tencentOSS = oss;
        await next();
    }
}