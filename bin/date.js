

exports.isValidDate = function isValidDate(date) {
    var result = new Date(date);
    return (result !== "Invalid Date");
};

exports.dateFormateToString=function dateFormate(date,format) {
    var converDate = new Date();
    if (date) {
        converDate = date;
    }
    var dateObj = new Date(converDate);
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var hours=dateObj.getUTCHours();
    var minutes=dateObj.getUTCMinutes();
    var seconds=dateObj.getUTCSeconds();
    var miliSeconds=dateObj.getUTCMilliseconds();
    if(format && format==="YYMMDD"){
        return "" + year + "/" + month + "/" + day + "";
    }else if(format && format==="YYMMDD HH:MM"){
        return "" + year + "/" + month + "/" + day + " "+hours+":"+minutes;
    }else{
        return "" + month + "/" + day + "/" + year + "";
    }
};

exports.getDateDifference=function getDateDifference(d1, d2) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var date1=new Date(d1);
    var date2=new Date(d2);
    var utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    var utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return (Math.floor((utc2 - utc1) / _MS_PER_DAY));
};

exports.getDateRangeByAddingDay=function getDateRangeByAddingDay(date,numberOfDays) {
    var dates=new Date(date);
    if(numberOfDays!=0){
        dates.setDate(dates.getDate()+numberOfDays);
    }
    return dates
};
