const express = require('express');
const userMiddlewares = require('../middlewares/userValidation');
const productMiddlewares = require('../middlewares/productsValidation');
const controller = require('../controller/productsController');

const router = express.Router();

router.use(userMiddlewares.validateToken);

router.get('/', controller.getProducts);
router.post('/', userMiddlewares.AdminPermissions, productMiddlewares.validateCreateAndUpdateReq, controller.setProduct);
router.put('/:id', userMiddlewares.AdminPermissions, productMiddlewares.validateCreateAndUpdateReq, controller.updateProduct);
router.delete('/:id', userMiddlewares.AdminPermissions, productMiddlewares.validateDeleteReq, controller.deleteProduct);

module.exports = router;