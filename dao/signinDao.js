const Sequelize = require('sequelize');
const config = require('../config/config');
const constants = require('../constants/constants');
const messages = require('../constants/messages');

const sequelize = new Sequelize(config.URLBD);

class SigninDao {

    static async getUsers() {
        try { return await sequelize.query(constants.QUERY_SELECT_USERS, {type: sequelize.QueryTypes.SELECT}); } 
        catch (e) { return messages.ERROR }
    }

    static async setUser(username, fullname, email, phone, address, password) {
        try { return await sequelize.query(constants.QUERY_CREATE_USER, {replacements: [username, fullname, email, phone, address, password]}); }
        catch (e) { return messages.ERROR }
    }

    static async updateUser(username, fullname, email, phone, address, password, id) {
        try { return await sequelize.query(constants.QUERY_UPDATE_USER, {replacements: [username, fullname, email, phone, address, password, id]}); }
        catch (e) { return messages.ERROR }
    }

    static async deleteUser(id) {
        try { return await sequelize.query(constants.QUERY_DELETE_USER, {replacements: [id]}); }
        catch (e) { return messages.ERROR }
    }

    static async userValidation(username, password) {
        try { return await sequelize.query(constants.QUERY_VALIDATE_USER, {replacements: [username, password], type: sequelize.QueryTypes.SELECT}); }
        catch (e) { return messages.ERROR }
    }
}

module.exports = SigninDao;