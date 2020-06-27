const jwt = require('jsonwebtoken');
const constants = require('../constants/constants');
const ResponseUtil = require('../utils/responses');

async function login(req, res){
    const username = req.body.username;
    const token = jwt.sign(username, constants.FIRMA);
    ResponseUtil.success(res, {token: token});
}

module.exports = {
    login
}