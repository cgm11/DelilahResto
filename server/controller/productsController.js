const ResponseUtil = require('../utils/responses');
const ProductsDao = require('../dao/productsDao');
const messages = require('../constants/messages');

async function getProducts(req, res) {
    const products = await ProductsDao.getProducts();
    if(products == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    ResponseUtil.success(res, products);    
}

async function setProduct(req, res) {
    const { name, price } = req.body; 
    const product = await ProductsDao.setProduct(name, price);   
    if(product == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    ResponseUtil.created(res, req.body);
}

async function updateProduct(req, res){
    const id = req.params.id;
    const {name, price} = req.body;
    const product = await ProductsDao.updateProduct(name, price, id);
    if(product == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    ResponseUtil.noContent(res); 
}

async function deleteProduct(req, res){
    const id = req.params.id;
    const product = await ProductsDao.deleteProduct(id);
    if(product == messages.ERROR) ResponseUtil.internalError(res, messages.MESSAGE_ERROR);
    ResponseUtil.noContent(res);
}

module.exports = {
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
};