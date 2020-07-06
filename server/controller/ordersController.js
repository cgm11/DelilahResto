const ResponseUtil = require('../utils/responses');
const OrdersDao = require('../db/dao/ordersDao');
const ProductsDao = require('../db/dao/productsDao');
const ProductsOrderDao = require('../db/dao/productsOrderDao');
const messages = require('../constants/messages');
const constants = require('../constants/constants');

async function getOrders(req, res) {
    try {
        var orders;
        const userType = req.body.userType;
        if (userType == constants.IS_ADMIN) {
            orders = await OrdersDao.getOrders();
        } else {
            const userId = req.body.userId;
            orders = await OrdersDao.getMyOrders(userId);
        }
        if (orders == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.success(res, orders);
    }
    catch (e) { return messages.ERROR }
}

async function setOrder(req, res) {
    const savedOrder = await OrdersDao.setOrder(req.body);
    const products = req.body.products;

    for(let item of products){
        // Search for the product with the givenId and make sure it exists. If it doesn't, respond with status 400.
        const product = await ProductsDao.getOneProduct(item.id);
        if (!product) {
            return ResponseUtil.badRequest(res, messages.INVALID_PRODUCT_ID);
        }
        // Create a dictionary with which to create the ProductOrder
        const po = {
            orderId: savedOrder.id,
            productId: item.id,
            quantity: item.quantity,
        }
        // Create and save a productOrder
        await ProductsOrderDao.setProductsOrder(po);
    };
    // If everything goes well, respond with the order
    return ResponseUtil.success(res, savedOrder);
}

async function updateOrder(req, res) {
    try {
        const order = await OrdersDao.updateOrder(req.body, req.params.id);
        console.log(order);
        if (order == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.noContent(res);
    }
    catch (e) { 
        console.log("error controler: " + e);
        return messages.ERROR }
}

module.exports = {
    getOrders,
    setOrder,
    updateOrder
};