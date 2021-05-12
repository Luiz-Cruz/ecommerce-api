const orderModel = require('./order.model');

async function find(conditions, paging) {
  return await orderModel.find(conditions, paging).exec();
}

async function findItem(orderId, itemId) {
  return await orderModel.findOne({'orderId': orderId, 'items.itemId': itemId});
}

async function insert(body) {
  return await orderModel.create(body);
}

async function update(id, body) {
  return await orderModel.findOneAndUpdate({'orderId': id}, body);
}

async function remove(id) {
  return await orderModel.deleteOne(id);
}

module.exports = { find, findItem, insert, update, remove };
