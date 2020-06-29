const Sequelize = require('sequelize');
const db = require('../db');

const status = db.define('status', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    }
})

module.exports = status;