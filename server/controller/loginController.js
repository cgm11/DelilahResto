const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const moment = require('moment');
const constants = require('../constants/constants');
const ResponseUtil = require('../utils/responses');
const UsersDao = require('../db/dao/usersDao');
const messages = require('../constants/messages');

async function login(req, res) {
    try {
        const userlogin = req.body.user;
        const user = await UsersDao.userValidation(userlogin);
        if (null != user && user.username == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        else if (user) {
            if (validPassword(req.body.password, user.password)) {
                const token = tokenGenerator(user);
                ResponseUtil.success(res, { token: token });
            } else ResponseUtil.forbidden(res, messages.INVALID_CREDENTIALS);
        } else ResponseUtil.forbidden(res, messages.INVALID_CREDENTIALS);
    }
    catch (e) { return messages.ERROR }
}

const tokenGenerator = (user) => {
    const payload = {
        userType: user.userTypeId,
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(10, 'minutes').unix()
    }
    return jwt.sign(payload, constants.FIRMA);
}

const validPassword = (userPasswor, bdPassword) => {
    return bcrypt.compareSync(userPasswor, bdPassword);
}

module.exports = {
    login
}