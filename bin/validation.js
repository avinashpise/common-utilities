
exports.isNull = function isNull(item) {
    return item == null || item == "" || typeof item == "undefined";
};

exports.isNotNull = function isNotNull(item) {
    return item != null && item != "" && typeof item != "undefined";
};

exports.isNotEmpty = function isNotEmpty(item) {
    return item != null && item != "" && typeof item != "undefined" && typeof item == 'object';
};

exports.isEmptyObject=function(obj) {
    return Object.keys(obj).length === 0;
};




