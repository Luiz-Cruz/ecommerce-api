const orderService = require('./order.service');

async function create(req, res) {
    try {
        if(req.body.shippingValue > req.body.orderValue) {
            res.status(400).json('Error');
        } 
        const order = await orderService.insert(req.body);
        res.status(201).json(order);
    } catch(err) {
        res.status(400).json('Error to saving in database');
    }
}

async function list(req, res) {
    const result = await orderService.list({});
    res.send(result);
}

async function listById(req, res) {
   const result = await orderService.listById(req.params.id);
   res.send(result);
}

module.exports = { create, list, listById };
