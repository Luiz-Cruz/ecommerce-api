const repository = require('./order.repository');

async function list(params) {
  // Formatar para SQLServer -> select * from tabela where from = o1803852

  const conditions = {};
  const paging = {};

  return await repository.find(conditions, paging); // recebe as conditions
}

async function listById(id) {
   return await repository.find({'orderId': id });
}

async function insert(payload) {
  return await repository.insert(payload);
}

async function update(payload) {
  return await repository.update(payload);
}

module.exports = { list, listById, insert, update };
