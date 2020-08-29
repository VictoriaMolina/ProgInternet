var express = require('express');
const { route } = require('.');

const {
     newAppointment, 
     appointmentList 
} = require('../controllers/appointment.controller');

const router = express.Router();

/**
 * Route that create a new appointment.
 */
router.post('/new', newAppointment);

/**
 * Route that shows you the appointments.
 */
router.post('/list', appointmentList);

module.exports = router;