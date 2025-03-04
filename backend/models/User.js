const mongoose = require('mongoose');

const user = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    mobNum: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('User', user);

export default User;