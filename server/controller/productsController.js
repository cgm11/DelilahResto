const ResponseUtil = require('../utils/responses');
const ProductsDao = require('../dao/productsDao');
const messages = require('../constants/messages');

async function getProducts(req, res) {
    try {
        const products = await ProductsDao.getProducts();
        if (products == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.success(res, products);
    }
    catch (e) { return messages.ERROR }
}

async function setProduct(req, res) {
    try {
        const product = await ProductsDao.setProduct(req.body);
        if (product == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.created(res, req.body);
    }
    catch (e) { return messages.ERROR }
}

async function updateProduct(req, res) {
    try {
        const product = await ProductsDao.updateProduct(req.body, req.params.id);
        if (product == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.noContent(res);
    }
    catch (e) { return messages.ERROR }
}

async function deleteProduct(req, res) {
    try {
        const product = await ProductsDao.deleteProduct(req.params.id);
        if (product == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
        ResponseUtil.noContent(res);
    }
    catch (e) { return messages.ERROR }
}

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
};