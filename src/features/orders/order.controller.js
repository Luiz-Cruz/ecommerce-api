const statusCodes = require('../../utils/statusCodes');
const orderService = require('./order.service');

async function create(req, res) {
  try {
    const order = await orderService.insert(req.body);
    res.status(statusCodes.CREATED).json(order);
  } catch (err) {
    res
      .status(statusCodes.BAD_REQUEST)
      .json({ message: 'Error to saving in database' });
  }

async function addItem(req, res) {
  try {
    const order = await orderService.addItem(req.params.id, req.body);
    res.status(statusCodes.CREATED).json(order);
  } catch (err) {
    res.status(statusCodes.BAD_REQUEST).json({ message: 'Error to add item' });
  }
}

async function list(req, res) {
  try {
    const order = await orderService.list(req.query);
    res.status(statusCodes.OK).json(order);
  } catch (err) {
    res.status(statusCodes.BAD_REQUEST).json({ message: 'Error to list item' });
  }
}

async function listById(req, res) {
  try {
    const order = await orderService.listById(req.params.id);
    res.status(statusCodes.OK).json(order);
  } catch (err) {
    res.status(statusCodes.BAD_REQUEST).json({ message: 'Error to list item' });
  }
}

async function listItem(req, res) {
  try {
    const { items } = await orderService.listItem(
      req.params.id,
      req.params.itemid
    );
    const foundItem = items.find((item) => item.itemId == req.params.itemid);
    res.status(statusCodes.OK).json(foundItem);
  } catch (err) {
    res.status(statusCodes.BAD_REQUEST).json({ message: 'Error to list item' });
  }

async function update(req, res) {
  try {
    const order = await orderService.update(req.params.id, req.body);
    res.status(statusCodes.CREATED).json(order);
  } catch (err) {
    res
      .status(statusCodes.BAD_REQUEST)
      .json({ message: 'Error to update in database' });
  }
}

async function updateItem(req, res) {
  try {
    const order = await orderService.updateItem(req.params.id, req.body);
    res.status(statusCodes.CREATED).json(order);
  } catch (err) {
    res
      .status(statusCodes.BAD_REQUEST)
      .json({ message: 'Error to update in database' });
  }
}

async function remove(req, res) {
  try {
    const order = await orderService.remove(req.params.id);
    res.status(statusCodes.OK).json(order);
  } catch (err) {
    res
      .status(statusCodes.BAD_REQUEST)
      .json({ message: 'Error to remove in database' });
  }


module.exports = {
  create,
  addItem,
  list,
  listById,
  listItem,
  update,
  updateItem,
  remove,
};
