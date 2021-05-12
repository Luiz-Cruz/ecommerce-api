const repository = require('./order.repository');

async function list(params) {
  // Formatar para SQLServer -> select * from tabela where from = o1803852

  const conditions = params;
  const paging = {};

  return await repository.find(conditions, paging); // recebe as conditions
}

async function listById(id) {
   return await repository.find({'orderId': id });
}

async function listItem(orderId, itemId) {
  return await repository.findItem(orderId, itemId);
}

async function insert(body) {
  return await repository.insert(body);
}

async function update(id, body) {
  return await repository.update(id, body);
}

async function remove(id) {
  return await repository.remove({'orderId': id});
}

module.exports = { list, listById, listItem, insert, update, remove };
