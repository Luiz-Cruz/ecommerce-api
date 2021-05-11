const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');

router.post('/', orderController.create);
router.get('/', orderController.list);
router.get('/:id', orderController.listById);
// router.put('/', orderController.update);

module.exports = router;