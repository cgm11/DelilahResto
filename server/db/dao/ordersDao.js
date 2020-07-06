const messages = require('../../constants/messages');
const orders = require('../models/orders.model');
const products = require('../models/products.model');
const productsOrder = require('../models/productsOrder.model');
const paymentMethod = require('../models/paymentMethods.model');
const users = require('../models/users.model');
const statusOrder = require('../models/statusOrder.model');

class OrdersDao {

    static async getOrders() {
        try {
            const allOrders = await orders.findAll({
                attributes: ['id', 'description', 'createdAt', 'updatedAt'],
                include: [{
                    model: users,
                    as: 'user',
                    required: false,
                    attributes: ['id', 'username']
                },
                {
                    model: paymentMethod,
                    as: 'paymentMethod',
                    required: false,
                    attributes: ['id', 'type']
                },
                {
                    model: statusOrder,
                    as: 'statusOrder',
                    required: false,
                    attributes: ['id', 'type']
                },
                {
                    model: products,
                    as: 'products',
                    required: false,
                    attributes: ['id', 'name', 'price'],
                    through: {
                        model: productsOrder,
                        as: 'productsOrders',
                        attributes: ['quantity'],
                    }
                }
                ]
            })
            return allOrders;
        }
        catch (e) { return messages.ERROR }
    }

    static async getMyOrders(userId) {
        try {
            const allOrders = await orders.findAll({
                attributes: ['id', 'description', 'createdAt', 'updatedAt'],
                where: { userId: userId },
                include: [{
                    model: users,
                    as: 'user',
                    required: false,
                    attributes: ['id', 'username']
                },
                {
                    model: paymentMethod,
                    as: 'paymentMethod',
                    required: false,
                    attributes: ['id', 'type']
                },
                {
                    model: statusOrder,
                    as: 'statusOrder',
                    required: false,
                    attributes: ['id', 'type']
                },
                {
                    model: products,
                    as: 'products',
                    required: false,
                    attributes: ['id', 'name', 'price'],
                    through: {
                        model: productsOrder,
                        as: 'productsOrders',
                        attributes: ['quantity'],
                    }
                }
                ]
            })
            return allOrders;
        }
        catch (e) { return messages.ERROR }
    }

    static async setOrder(body) {
        try { return await orders.create(body) }
        catch (e) { return messages.ERROR }
    }

    static async updateOrder(body, id) {
        try {
            return await orders.update(body, {
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }
}

module.exports = OrdersDao;