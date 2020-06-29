const bd = require('./db/db');
const Orders = require('./db/models/index').Orders;
const Users = require('./db/models/index').Users;
const StatusOrder = require('./db/models/index').StatusOrder;
const PaymentMethods = require('./db/models/index').PaymentMethods;
const UserTypes = require('./db/models/index').UserTypes;

const ordersData = require("./db/dataDB/orders");
const statusData = require("./db/dataDB/statusOrder");
const userTypesData = require("./db/dataDB/userTypes");
const paymentMethodsData = require("./db/dataDB/paymentMethods");
const usersData = require("./db/dataDB/users");

const seed = () => {
    return UserTypes.bulkCreate(userTypesData)
    .then( () => Users.bulkCreate(usersData)
    .then(() => PaymentMethods.bulkCreate(paymentMethodsData)
    .then(() => StatusOrder.bulkCreate(statusData)
    .then(() => Orders.bulkCreate(ordersData))
    )))
}

seed()
.then(() => {
    process.exit();
})

