const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');

router.post('/', orderController.create);
router.post('/:id/item', orderController.addItem);
router.get('/', orderController.list);
router.get('/:id', orderController.listById);
router.get('/:id/item/:itemid', orderController.listItem);
router.put('/:id', orderController.update);
router.patch('/:id', orderController.updateItem);
router.delete('/:id', orderController.remove);

module.exports = router;