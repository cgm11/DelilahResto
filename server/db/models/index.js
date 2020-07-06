const sequelize = require('sequelize');
const Users = require('./users.model');
const UserTypes = require('./userTypes.model');
const PaymentMethods = require('./paymentMethods.model');
const Orders = require('./orders.model');
const Products = require('./products.model');
const StatusOrder = require('./statusOrder.model');
const ProductsOrders = require('./statusOrder.model');

module.exports = {
    Users,
    UserTypes,
    PaymentMethods,
    Orders,
    Products,
    StatusOrder,
    ProductsOrders
}