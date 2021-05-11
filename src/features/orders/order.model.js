const mongoose = require('mongoose');
const { Schema } =  mongoose;

const orderSchema = new Schema({
    orders: {
        order_id: String,
        order_date: Date,
        order_status: String,
        client_name: String,
        client_email: String,
        order_value: String,
        shipping_value: String,
        client_cep: Number,
        client_address: String,
        payment: String,
        Items: String,
    },
    items: {
        item_id: String,
        item_description: String,
        item_value: String,
        item_quantity: Number,
        discount: String,
    },
});

module.exports = mongoose.model('oders', orderSchema);
