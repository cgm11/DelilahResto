const sequelize = require('sequelize');

const {
    NAME_BD,
    USER_DB,
    PASS_BD,
    HOST_BD,
    DIALECT_DB,
    TIME_ZONE
} = require('../config/config');

const bd = new sequelize(NAME_BD, USER_DB, PASS_BD, {
    host: HOST_BD,
    dialect: DIALECT_DB,
    loggin: false,
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true
    },
    timezone: TIME_ZONE
});

module.exports = bd;

const Users = require('./models/users.model');
const UserTypes = require('./models/userTypes.model');
const PaymentMethods = require('./models/paymentMethods.model');
const Orders = require('./models/orders.model');
const Products = require('./models/products.model');
const StatusOrder = require('./models/statusOrder.model');
const ProductsOrders = require('./models/statusOrder.model');
const productsOrder = require('./models/productsOrder.model');

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
    defaultValue: 1,
    allowNull: false
  }
});

Products.belongsToMany(Orders, {
  through: productsOrder,
  as: 'orders',
  foreignKey:{
    type: sequelize.INTEGER,
    name: "productId",
    allowNull: false
  },
  otherKey: {
    type: sequelize.INTEGER,
    name: "orderId",
    allowNull: false
  }
});

Orders.belongsToMany(Products, {
  through: productsOrder,
  as: 'products',
  foreignKey:{
    type: sequelize.INTEGER,
    name: "orderId",
    allowNull: false
  },
  otherKey: {
    type: sequelize.INTEGER,
    name: "productId",
    allowNull: false
  }
});

