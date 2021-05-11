const orderModel = require('./order.model');

async function create(req, res) {
    try {
        await orderModel.create(req.body);
        res.status(201).json('Success!');
    } catch(err) {
        res.status(400).json('Error to saving in database');
    }
}

async function list(params) {
    return await orderModel.findOne(params).exec();
}

module.exports = { create, list };
