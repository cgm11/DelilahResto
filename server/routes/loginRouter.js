const express = require('express');
const middlewares = require('../middlewares/userValidation');
const controller = require('../controller/loginController');

const router = express.Router();

router.post('/', middlewares.validateUserPass, controller.login);

module.exports = router;