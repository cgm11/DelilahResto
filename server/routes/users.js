const express = require('express');
const controller = require('../controller/signinController');
const middlewares = require('../middlewares/userValidation');

const router = express.Router();

router.get('/', middlewares.validateToken, middlewares.AdminPermissions, controller.getUsers);
router.post('/', middlewares.validateCreateReq, controller.setUser);
router.put('/:id', middlewares.validateToken, middlewares.AdminPermissions, middlewares.validateUpdateReq, controller.updateUser);
router.delete('/:id', middlewares.validateToken, middlewares.AdminPermissions, middlewares.validateDeleteReq, controller.deleteUser);

module.exports = router;