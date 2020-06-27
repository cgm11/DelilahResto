const jwt = require('jsonwebtoken');
const constants = require('../constants/constants');
const messages = require('../constants/messages');
const ResponseUtil = require('../utils/responses');
const SigninDao = require('../dao/signinDao');

// Users Authentication
const validateUserPass = async (req, res, next) => {    
    const {username, password} = req.body;
        const user = await SigninDao.userValidation(username, password);
        if(user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        else if(user.length < 1) ResponseUtil.forbidden(res, messages.INVALID_CREDENTIALS);        
        next();
}

// Users authorization
const verifyToken = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const verifyToken = jwt.verify(token, constants.FIRMA);
        if (verifyToken) {
            req.query.username = verifyToken.username;
            return next();
        }
    } catch (e) {ResponseUtil.badRequest(res, messages.ERROR_AUTHORIZATION);}
}

module.exports = {validateUserPass, verifyToken};