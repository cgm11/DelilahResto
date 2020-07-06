const express = require('express');
const userMiddlewares = require('../middlewares/userValidation');
const orderMiddlewares = require('../middlewares/ordersValidation');
const controller = require('../controller/ordersController');

const router = express.Router();

router.use(userMiddlewares.validateToken);

router.get('/', controller.getOrders);
router.post('/', orderMiddlewares.validateCreateOrder, controller.setOrder);
router.put('/:id', userMiddlewares.AdminPermissions, orderMiddlewares.validateUpdateOrder, controller.updateOrder);


module.exports = router;