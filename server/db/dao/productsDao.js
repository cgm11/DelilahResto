const messages = require('../../constants/messages');
const products = require('../models/products.model');

class ProductsDao {

    static async getProducts() {
        try { return await products.findAll() }
        catch (e) { return messages.ERROR }
    }

    static async getOneProduct(id) {
        try {
            return await products.findOne({
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }

    static async setProduct(body) {
        try { return await products.create(body) }
        catch (e) { return messages.ERROR }
    }

    static async updateProduct(body, id) {
        try {
            return await products.update(body, {
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }

    static async deleteProduct(id) {
        try {
            return await products.destroy({
                where: { id: id }
            })
        }
        catch (e) { return messages.ERROR }
    }
}

module.exports = ProductsDao;