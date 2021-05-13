const repository = require('./order.repository');

async function insert(body) {
  return await repository.insert(body);
}

async function addItem(orderId, body) {
  return await repository.addItem(orderId, body);
}

async function list(params) {
  const conditions = params;
  const paging = {};
  return await repository.find(conditions, paging); 
}

async function listById(id) {
   return await repository.find({'orderId': id });
}

async function listItem(orderId, itemId) {
  return await repository.findItem(orderId, itemId);
}

async function update(id, body) {
  return await repository.update(id, body);
}

async function updateItem(orderId, body) {
  return await repository.updateItem(orderId, body);
}

async function remove(id) {
  return await repository.remove({'orderId': id});
}

module.exports = { addItem, list, listById, listItem, insert, update, updateItem, remove };
