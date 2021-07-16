exports.isObject = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}
exports.hasOwn = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop)
}