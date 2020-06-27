const ResponseUtil = require('../utils/responses');
const SigninDao = require('../dao/signinDao');
const messages = require('../constants/messages');

async function getUsers (req, res){
    const users = await SigninDao.getUsers();
    if(users == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    ResponseUtil.success(res, users);
}

async function setUser(req, res){
    const { username, fullname, email, phone, address, password } = req.body;
    const user = await SigninDao.setUser(username, fullname, email, phone, address, password);
    if(user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    ResponseUtil.created(res, req.body);
}

async function updateUser(req, res){
    const id = req.params.id;
    const { username, fullname, email, phone, address, password } = req.body;   
    const user = await SigninDao.updateUser(username, fullname, email, phone, address, password, id);
    if(user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR); 
    ResponseUtil.noContent(res); 
}

async function deleteUser(req, res){
    const id = req.params.id;   
    const user = await SigninDao.deleteUser(id);
    if(user == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR); 
    ResponseUtil.noContent(res);
}

module.exports = {
    getUsers,
    setUser,
    updateUser, 
    deleteUser
}