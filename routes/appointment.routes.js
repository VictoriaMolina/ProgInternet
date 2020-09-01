var express = require('express');
const { route } = require('.');

const {
     newAppointment, 
     appointmentList,
     appointmentInfo
} = require('../controllers/appointment.controller');

const router = express.Router();

/**
 * Route that create a new appointment.
 */
router.post('/new', newAppointment);

/**
 * Route that shows you the appointments.
 */
router.get('/list', appointmentList);

/**
 * Route that shows you the appointments.
 */
router.get('/info', appointmentInfo);

module.exports = router;