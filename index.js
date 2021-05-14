require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.APP_PORT || 3000;
const orderRoutes = require('./src/features/orders/order.routes');

app.use(express.json());

app.use('/orders', orderRoutes);

app.listen(port, async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log(`Listenning at http://localhost:${port}`);
  } catch (err) {
    console.error(err);
  }
});
