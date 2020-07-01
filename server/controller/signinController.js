const bcrypt = require('bcryptjs');
const ResponseUtil = require('../utils/responses');
const UsersDao = require('../db/dao/usersDao');
const messages = require('../constants/messages');

async function getUsers(req, res) {
    try {
        const users = await UsersDao.getUsers();
        if (users == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.success(res, users);
    }
    catch (e) { return messages.ERROR }
}

async function setUser(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await UsersDao.setUser(req.body);
        if (user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.created(res, req.body);
    }
    catch (e) { return messages.ERROR }
}

async function updateUser(req, res) {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await UsersDao.updateUser(req.body, req.params.id);
        if (user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.noContent(res);
    }
    catch (e) {
        console.log("se fue por el error de update");
        return messages.ERROR }
}

async function deleteUser(req, res) {
    try {
        const user = await UsersDao.deleteUser(req.params.id);
        if (user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.noContent(res);
    }
    catch (e) { return messages.ERROR }
}

module.exports = {
    getUsers,
    setUser,
    updateUser,
    deleteUser
}