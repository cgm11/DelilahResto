const express = require('express');
const jwt = require('jsonwebtoken');
const middlewares = require('../middlewares/userValidation');
const controller = require('../controller/productsController');

const router = express.Router();

router.get('/', middlewares.verifyToken, controller.getProducts);
router.post('/', controller.setProduct);
router.put('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;