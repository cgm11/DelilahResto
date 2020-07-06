const Sequelize = require('sequelize');
const db = require('../db');

const productsOrder = db.define('productsOrder', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    }
})

module.exports = productsOrder;