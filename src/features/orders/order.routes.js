const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');

router.post('/', orderController.create);
router.get('/', orderController.list);
router.get('/:id', orderController.listById);
router.get('/:id/item/:itemid', orderController.listItem);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.remove)

// router.put('/', orderController.update);

module.exports = router;