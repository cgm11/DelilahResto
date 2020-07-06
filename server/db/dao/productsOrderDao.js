const messages = require('../../constants/messages');
const productsOrder = require('../models/productsOrder.model');

class productsOrderDao {

    static async getProductsOrder() {
        try { return await productsOrder.findAll() }
        catch (e) { return messages.ERROR }
    }

    static async setProductsOrder(body) {
        try { return await productsOrder.create(body) }
        catch (e) { return messages.ERROR }
    }
}

module.exports = productsOrderDao;