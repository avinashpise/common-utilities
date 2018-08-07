const validation=require('./validation');

exports.checkInArray=function(array,value){
    var present=false;
    if(validation.isNotNull(array) && (array instanceof Array && array.indexOf(value) > -1)) {
        return true;
    }
    return present;
};

exports.getObjectFromArray=function (array,key,value) {
    return array.filter(function(item) {return item[key]==value;})[0];
};

exports.groupArrayObjectByKey=function groupByKey(array,key){
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };

    return groupBy(array, key);
};

exports.getObjectFromArrayByKeyValue=function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
};

exports.getExcactObjectFromArray=function(array, obj) {
    return array.filter(function (entry) {
        return Object.keys(obj).every(function (key) {
            return entry[key] === obj[key];
        });
    });
};

exports.arrayToCommaString=function(input){
    var string="";
    for(var i=0;i<input.length;i++){
        if(i===input.length-1){
            string=string+input[i]+"";
        }else{
            string=string+input[i]+",";
        }
    }
    return string;
};

exports.arrayToTabString=function(input){
    var string="";
    for(var i=0;i<input.length;i++){
        if(i===input.length-1){
            string=string+input[i]+"";
        }else{
            string=string+input[i]+"\t";
        }
    }
    return string;
};

exports.replaceByMatchingProperties=function(array, object,ignoreArrayOfKeys) {
    ignoreArrayOfKeys.forEach(function(arrayObject){
        delete object[arrayObject.name];
    });
    return res=array.filter(function (entry) {
        return Object.keys(object).every(function (key) {
            if(entry[key] === object[key]){
                ignoreArrayOfKeys.forEach(function(arrayObject){
                    entry[arrayObject.name]=arrayObject.count;
                });
                return array;
            }
        });
    });
};

exports.matchPropertiesWithKeys=function(array, object,ignoreArrayOfKeys) {
    ignoreArrayOfKeys.forEach(function(arrayObject){
        delete object[arrayObject.name];
    });
    return array.filter(function (entry) {
        return Object.keys(object).every(function (key) {
            return entry[key] === object[key];
        });
    });
};

exports.simillerFromTwoArray=function simillerFromTwoArray(arr1,arr2){
    var ret = [];
    arr1.sort();
    arr2.sort();
    for(var i = 0; i < arr1.length; i += 1) {
        if(arr2.indexOf(arr1[i].toLowerCase()) >=0){
            ret.push(arr1[i]);
        }
    }
    return ret;
};

exports.ArrayToCommaString=function ArrayToCommaString(arr){
    var str="";
    for(var i=0;i<arr.length;i++){
        if(i===0){
            str=str.concat("'"+arr[i]+"'")
        }else{
            str=str.concat(",'"+arr[i]+"'")
        }

    }
    return str;
};
