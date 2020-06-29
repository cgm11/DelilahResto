const Sequelize = require('sequelize');
const db = require('../db');

const orders = db.define('status', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    },
    total: {
        type: Sequelize.INTEGER,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    },
    user: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    },
    address: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    },
    status: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    }
})

module.exports = orders;