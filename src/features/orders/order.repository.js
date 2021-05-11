const orderModel = require('./order.model');

async function find(conditions, paging) {
  return await orderModel.find(conditions, paging).exec();
}

async function insert(body) {
  return await orderModel.create(body);
}

async function update(body) {
  return await orderModel.findOneAndUpdate({}, body);
}

module.exports = { find, insert, update };
