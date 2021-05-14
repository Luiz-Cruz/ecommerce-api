const statusCodes = require('../../utils/statusCodes');

const checkShippingValue = (req, res, next) => {
  const { shippingValue, orderValue } = req.body;

  if (shippingValue > orderValue) {
    return res.status(statusCodes.BAD_REQUEST).json({
      message: 'Error shipping value is more bigger then order value',
    });
  }

  next();
};

module.exports = {
  checkShippingValue,
};
