const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
    }, 
    first_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: 50
    }, 
    gender: {
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    salary: {
        type: Number,
        required: true,
        trim: true,
        min: 0
    }
});

const employee = mongoose.model('employee', employeeSchema);
module.exports = employee;