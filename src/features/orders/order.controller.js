const orderService = require('./order.service');

async function create(req, res) {
    try {
        if(req.body.shippingValue > req.body.orderValue) {
            res.status(400).json('Error shipping value is more bigger then order value');
        } 
        const order = await orderService.insert(req.body);
        res.status(201).json(order);
    } catch(err) {
        res.status(400).json('Error to saving in database');
    }
}

async function list(req, res) {
    console.log(req.query);
    const result = await orderService.list(req.query);
    res.send(result);
}

async function listById(req, res) {
   const result = await orderService.listById(req.params.id);
   res.send(result);
}

async function listItem(req, res) {
    const result = await orderService.listItem(req.params.id, req.params.itemid);
    const items = result.items;
    const filtered = items.filter(obj => obj.itemId == req.params.itemid);
    res.send(filtered);   
}

async function update(req, res) {
    const result = await orderService.update(req.params.id, req.body);
    res.send(result);
}

async function remove(req, res) {
    const result = await orderService.remove(req.params.id);
    res.send(result);
}


module.exports = { create, list, listById, listItem, update, remove };
