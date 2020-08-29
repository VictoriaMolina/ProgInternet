const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        requiredTime: {
            type: Number,
            required: true,
            default: 1,
        },
        cost: Number,
        image:{
            type: String,
            required: false
        }
    }
);

const Services = mongoose.model('Service', serviceSchema);

module.exports = {
    Services
};