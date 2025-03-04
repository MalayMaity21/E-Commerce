const mongoose = require('mongoose');
const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ["PayPal", "gPay", "Stripe", "Cash on Delivery"], // Allowed payment methods
    }
});

const Order = new mongoose.model('Order', orderSchema);

export default Order;