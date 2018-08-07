exports.getJson = function getJson(result) {
    if (result instanceof String || typeof (result) === "string") {
        result = JSON.parse(result);
    }
    return result;
};

exports.addIfDefined=function(Obj, name, prop, hasProperty) {
    if ((prop !== null && typeof prop !== 'undefined' && prop !== "") || hasProperty) {
        Obj[name] = prop;
    }
};

exports.mergedIfDefined=function(Obj, name, obj2, hasProperty) {
    if ((obj2 !== null && typeof obj2 !== 'undefined' &&  typeof obj2 === 'object' && obj2 !== "") || hasProperty) {
        Obj[name] = (Obj[name])?Obj[name].concat(obj2):obj2;
    }
};

exports.getKeyValueFromObject=function(object, key){
    if (object[key]) {
        return object[key];
    }
    return null;
};

exports.renameProperty = function (object,oldKeyNames, newKeyNames) {
    var newObject={};
    for(var i in object){
        if (object.hasOwnProperty(i) && this.getKeyValueFromObject(newKeyNames,i)) {
            newObject[this.getKeyValueFromObject(newKeyNames,i)]=object[i];
        }
    }
    return newObject;
};

exports.objectToCommaString=function(input){
    var string="";
    for (var key in input) {
                string = string + input[key] + ",";
    }
    return string;
};
exports.objectToTabString=function(input){
    var string="";
    for (var i in input){
                string = string + input[i] + "\t";
    }
    return string;
};

