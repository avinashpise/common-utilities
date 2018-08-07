
exports.BadRequest=function(msg) {
    this.name = 'BadRequest';
    this.code = 400;
    this.msg = {
        "error": "Invalid_Request",
        "description": "Invalid Request"
    };

    if (msg) {
        this.msg.description = msg;
    }

    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;
};

exports.BadSession=function(msg) {
    this.name = 'BadSession';
    this.code = 401;
    this.msg = {
        "error": "Invalid_Session",
        "description": "Invalid Session"
    };

    if (msg) {
        this.msg.description = msg;
    }

    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;
};

exports.CallFailed=function(msg) {
    this.name = 'CallFailed';
    this.code = 500;
    this.msg = {
        "error": "Backend_Call_Failed",
        "description": "Requested api call has failed"
    };

    if (msg) {
        this.msg.description = msg;
    }
   

    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;
};

exports.NotFound=function (msg) {
    this.name = 'NotFound';
    this.code = 404;
    this.msg = {
        "error": "Not_Found_Entity",
        "description": "Requested resource does not exist"
    };

    if (msg) {
        this.msg.description = msg;
    }


    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;
};

exports.ServiceUnAvailable=function(msg) {
    this.name = 'ServiceUnAvailable';
    this.code = 503;
    this.msg = {
        "error": "Service_Unavailable",
        "description": "Requested Service Unavailable"
    };

    if (msg) {
        this.msg.description = msg;
    }
   

    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;
};

 exports.Unauthorized=function(msg) {
    this.name = 'Unauthorized';
    this.code = 401;
    this.msg = {
        "error": "Unauthorized_Access",
        "description": "Please try with correct credentials"
    };

    if (msg) {
        this.msg.description = msg;
    }
   

    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;
};

 exports.Forbidden=function (msg) {
     this.name = 'Forbidden';
     this.code = 403;
     this.msg = {
         "error": "Forbidden",
         "description": "Access Forbidden"
     };
     if (msg) {
         this.msg.description = msg;
     }
         Error.call(this, msg);
         Error.captureStackTrace(this, arguments.callee);
         return this;

 };

exports.MethodNotAllowed=function (msg) {
    this.name = 'MethodNotAllowed';
    this.code = 405;
    this.msg = {
        "error": "Method_Not_Allowed",
        "description": "Http Method Not Allowed"
    };
    if (msg) {
        this.msg.description = msg;
    }
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;

};

exports.BadGateway=function (msg) {
    this.name = 'BadGateway';
    this.code = 502;
    this.msg = {
        "error": "Bad_Gateway",
        "description": "Bad Gateway"
    };
    if (msg) {
        this.msg.description = msg;
    }
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
    return this;

};
