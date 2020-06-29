const Sequelize = require('sequelize');
const db = require('../db');

const products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    },
    price: {
        type: Sequelize.INTEGER,
        require: true,
        allowNull: false,
        validate: { notEmpty: true }
    },
    image: {
        type: Sequelize.STRING,
        require: false,
        allowNull: true
    },
})

module.exports = products;