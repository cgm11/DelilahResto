const Sequelize = require('sequelize');
const db = require('../db');

const orders = db.define('orders', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
})

module.exports = orders;