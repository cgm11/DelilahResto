const Sequelize = require('sequelize');
const config = require('../config/config');
const constants = require('../constants/constants');
const messages = require('../constants/messages');

const sequelize = new Sequelize(config.URLBD);

class ProductsDao {

    static async getProducts() {
        try { return await sequelize.query(constants.QUERY_SELECT_PRODUCTS, {type: sequelize.QueryTypes.SELECT}); } 
        catch (e) { return messages.ERROR }
    }   
    
    static async setProduct(name, price) {
        try { return await sequelize.query(constants.QUERY_CREATE_PRODUCT, {replacements: [name, price]}); }
        catch (e) { return messages.ERROR }
    }

    static async updateProduct(name, price, id) {
        try { return await sequelize.query(constants.QUERY_UPDATE_PRODUCT, {replacements: [name, price, id]}); }
        catch (e) { return messages.ERROR }
    }

    static async deleteProduct() {
        try { return await sequelize.query(constants.QUERY_DELETE_PRODUCT, {replacements: [id]}); }
        catch (e) { return messages.ERROR }
    }
}

module.exports = ProductsDao;