const jwt = require('jsonwebtoken');
const moment = require('moment');
const joi = require('@hapi/joi');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const ResponseUtil = require('../utils/responses');

// Users authorization
const validateToken = async (req, res, next) => {
    try {
        const token = req.headers.token.split(' ')[1];
        await jwt.verify(token, constants.FIRMA, (error, data) => {
            if (error) ResponseUtil.badRequest(res, messages.ERROR_AUTHORIZATION)
            if (data.expiredAt < moment().unix()) ResponseUtil.badRequest(res, messages.ERROR_AUTHORIZATION)
            req.body.userId = data.userId;
            req.body.userType = data.userType;
            return next();
        });
    } catch (e) { ResponseUtil.badRequest(res, messages.EMPTY_TOKEN); }
}

const validateCreateReq = (req, res, next) => {
    try {
        const schema = joi.object({
            username: joi.string().min(3).required(),
            fullname: joi.string().min(3).required(),
            email: joi.string().min(3).required().email(),
            phoneNumber: joi.string().min(3).required(),
            address: joi.string().min(3).required(),
            password: joi.string().min(3).required()
        });

        const correctReq = schema.validate(req.body);

        if (correctReq.error)
            return ResponseUtil.badRequest(res, correctReq.error.message);
        next();
    } catch (error) {
        ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    }
};

const validateUpdateReq = (req, res, next) => {
    try {
        const schema = joi.object({
            username: joi.string().min(3).required(),
            fullname: joi.string().min(3).required(),
            email: joi.string().min(3).required().email(),
            phoneNumber: joi.string().min(3).required(),
            address: joi.string().min(3).required(),
            password: joi.string().min(3).required(),
            userTypeId: joi.number().required(),
            userId: joi.number(),
            userType: joi.number()
        });
        console.log(req.body);
        console.log(schema);

        const correctReq = schema.validate(req.body);

        if (correctReq.error) return ResponseUtil.badRequest(res, correctReq.error.message);
        next();
    } catch (error) {
        ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    }
};

const validateDeleteReq = (req, res, next) => {
    try {
        const schema = joi.number().required();
        const correctReq = schema.validate(req.params.id);
        if (correctReq.error)
            return ResponseUtil.badRequest(res, correctReq.error.message);
        next();
    } catch (error) {
        ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    }
};

const AdminPermissions = (req, res, next) => {
    const userType = req.body.userType;
    if (userType !== constants.IS_ADMIN) ResponseUtil.forbidden(res, messages.DENIED);      
    next();    
}

module.exports = {
    validateToken,
    validateCreateReq,
    validateUpdateReq,
    validateDeleteReq,
    AdminPermissions
};