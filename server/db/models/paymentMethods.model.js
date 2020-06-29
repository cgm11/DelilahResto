const Sequelize = require('sequelize');
const db = require('../db');

const paymentMethods = db.define('paymentMethods', {
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

module.exports = paymentMethods;