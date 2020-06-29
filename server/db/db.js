const sequelize = require('sequelize');

const {
    NAME_BD,
    USER_DB,
    PASS_BD,
    HOST_BD,
    DIALECT_DB
} = require('../config/config');

const bd = new sequelize(NAME_BD, USER_DB, PASS_BD, {
    host: HOST_BD,
    dialect: DIALECT_DB,
    loggin: false
});

module.exports = bd;

const Users = require('./models/users.model');
const UserTypes = require('./models/userTypes.model');
const PaymentMethods = require('./models/paymentMethods.model');
const Orders = require('./models/orders.model');
const Products = require('./models/products.model');
const StatusOrder = require('./models/statusOrder.model');

//Foreign Keys
UserTypes.hasOne(Users);
Users.belongsTo(UserTypes, {
  foreignKey: {
    type: sequelize.INTEGER,
    defaultValue: 2,
    allowNull: false    
  }
});

PaymentMethods.hasOne(Orders);
Orders.belongsTo(PaymentMethods, {
  foreignKey: {
    type: sequelize.INTEGER,
    defaultValue: 2,
    allowNull: false
  }
});

Users.hasOne(Orders);
Orders.belongsTo(Users, {
  foreignKey: {
    type: sequelize.INTEGER,
    defaultValue: 2,
    allowNull: false
  }
});

StatusOrder.hasOne(Orders);
Orders.belongsTo(StatusOrder, {
  foreignKey: {
    type: sequelize.INTEGER,
    defaultValue: 2,
    allowNull: false
  }
});