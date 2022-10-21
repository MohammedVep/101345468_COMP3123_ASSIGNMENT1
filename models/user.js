const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        unique: true,
        required: true,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        maxlength: 50
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;