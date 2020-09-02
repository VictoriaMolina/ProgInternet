var express = require('express');
const { route } = require('.');

const {
    newService, 
    servicesList, 
    serviceInfo,
    serviceUpdate,
    serviceDelete

} = require('../controllers/services.controller');

const router = express.Router();

/**
 * Route that create a new appointment.
 */
router.post('/new', newService);

/**
 * Route that shows you the appointments.
 */
router.get('/list', servicesList);

/**
 * Route that shows you the info of the appointment.
 */
router.get('/info', serviceInfo);

/**
 * Route that update the info.
 */
router.post('/update', serviceUpdate);

/**
 * Route that delete the info.
 */
router.post('/delete', serviceDelete);

module.exports = router;