const Sequelize = require('sequelize');

const {
    NAME_BD,
    USER_DB,
    PASS_BD,
    HOST_BD,
    DIALECT_DB
} = require('./config/config');

const sequelize = new Sequelize(NAME_BD, USER_DB, PASS_BD, {
    host: HOST_BD,
    dialect: DIALECT_DB,
    loggin: false
});

module.exports = sequelize;

const Users = require('./models/users');