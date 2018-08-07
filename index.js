exports = module.exports = Utility;

const Error = require('./bin/errors');
const Arrays = require('./bin/arrays');
const Date = require('./bin/date');
const Objects = require('./bin/objects');
const Strings = require('./bin/strings');
const Validation = require('./bin/validation');


function Utility() {
    'use strict';
}
exports.error_handler = function error_handler(err, req, res) {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.status(err.code || 500).send(JSON.stringify(err.msg, undefined, 2));
};

exports.Error = Error;
exports.Array = Arrays;
exports.FormatDate = Date;
exports.Objects = Objects;
exports.StringUtility = Strings;
exports.Validate = Validation;
