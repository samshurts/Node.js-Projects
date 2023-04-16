'use strict';
var url = require('url');

module.exports = function (whitelist) {
    return function (req, res, next) {
        var method = req.method;
        if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
            return next();
        }

        var origin = getBaseUrl(req.headers.origin);
        var referer = getBaseUrl(req.headers.referer);
        var errorMessage;

        if (!origin && !referer) {
            return next();
        }

        if (origin && whitelist.indexOf(origin) < 0) {
            errorMessage = 'Invalid origin header ' + origin;
        } else if (referer && whitelist.indexOf(referer) < 0) {
            errorMessage = 'Invalid referer header ' + referer;
        } else {
            console.log('Origin and referer headers were not present');
            errorMessage = undefined;
        }

        if (errorMessage) {
            res.statusCode = 403;
            return next(new Error(errorMessage));
        } else {
            return next();
        }
    };

    function getBaseUrl(fullUrl) {
        var parsedUrl = url.parse(fullUrl);
        return parsedUrl.protocol + '//' + parsedUrl.host;
    }
};