const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');

router.post('/', orderController.create);
router.get('/', orderController.list);
// router.put('/', orderController.update);

module.exports = router;