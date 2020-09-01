const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        date: {
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
        cost: {
            type: Number,
            required: true
        }
    }
);

const Appointments = mongoose.model('Appointment', appointmentSchema);

module.exports = {
    Appointments
};