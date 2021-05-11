const orderService = require('./order.service');

async function create(req, res) {
    orderService.create(req, res);   
}

async function list(req, res) {
    const result = orderService.list(req, res);
    res.send(result);
}

module.exports = { create, list };
