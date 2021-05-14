const orderModel = require('./order.model');

async function find(conditions, paging) {
  return await orderModel.find(conditions, paging).exec();
}

async function findItem(orderId, itemId) {
  return await orderModel.findOne({ orderId: orderId, 'items.itemId': itemId });
}

async function addItem(orderId, body) {
  const order = await orderModel.findOne({ orderId: orderId });
  order.items.push(body);
  return await orderModel.findOneAndUpdate({ orderId: orderId }, order);
}

async function insert(body) {
  return await orderModel.create(body);
}

async function update(id, body) {
  return await orderModel.findOneAndUpdate({ orderId: id }, body);
}

async function updateItem(orderId, body) {
  return await orderModel.findOneAndUpdate(
    { orderId: orderId },
    { $set: { items: body } }
  );
}

async function remove(id) {
  return await orderModel.deleteOne(id);
}

module.exports = {
  find,
  addItem,
  findItem,
  insert,
  update,
  updateItem,
  remove,
};
