const sequelize = require('sequelize');
const messages = require('../../constants/messages');
const users = require('../models/users.model');

class UsersDao {

    static async getUsers() {
        try { return await users.findAll() }
        catch (e) { return messages.ERROR }
    }

    static async setUser(body) {
        try { return await users.create(body) }
        catch (e) { return messages.ERROR }
    }

    static async updateUser(body, id) {
        try {
            return await users.update(body, {
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }

    static async deleteUser(id) {
        try {
            return await users.destroy({
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }

    static async userValidation(user) {
        try {
            return await users.findOne({
                where: {
                    [sequelize.Op.or]: [{ email: user }, { username: user }],
                },
            })
        }
        catch (e) { return user = { "username": messages.ERROR } }
    }
}

module.exports = UsersDao;