const jwt = require('jsonwebtoken');
const moment = require('moment');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const ResponseUtil = require('../utils/responses');

// Users authorization
const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.token.split(' ')[1];
        await jwt.verify(token, constants.FIRMA, (error, data) => {
            if (error) ResponseUtil.badRequest(res, messages.ERROR_AUTHORIZATION)
            if (data.expiredAt < moment().unix()) ResponseUtil.badRequest(res, messages.ERROR_AUTHORIZATION)
            req.body.dataToken = data;
            return next();
        });
    } catch (e) { ResponseUtil.badRequest(res, messages.EMPTY_TOKEN); }
}

module.exports = { verifyToken };