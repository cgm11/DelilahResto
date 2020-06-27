const express = require('express');
const controller = require('../controller/signinController');

const router = express.Router();

router.get('/', controller.getUsers);
router.post('/', controller.setUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;