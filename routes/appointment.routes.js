var express = require('express');
const { route } = require('.');

const {
     newAppointment, 
     appointmentList,
     appointmentInfo,
     appointmentUpdate,
     appointmentDelete
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

/**
 * Route that shows you the appointments.
 */
router.post('/update', appointmentUpdate);

/**
 * Route that shows you the appointments.
 */
router.post('/delete', appointmentDelete);

module.exports = router;