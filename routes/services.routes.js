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
 * Route that shows you the appointments.
 */
router.get('/info', serviceInfo);

/**
 * Route that shows you the appointments.
 */
router.post('/update', serviceUpdate);

/**
 * Route that shows you the appointments.
 */
router.post('/delete', serviceDelete);

module.exports = router;