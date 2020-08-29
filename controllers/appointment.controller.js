/**
 * Function that creates a new appointment.
 * @param {*} req 
 * @param {*} res 
 */
function newAppointment(req, res){
    res.json({name: "newProduct"});
};

/**
 * Function that returns the appointments of the database.
 * @param {*} req 
 * @param {*} res 
 */
function appointmentList(req, res){
    res.json({name: "appointmentList"});
};

module.exports = {
    newAppointment,
    appointmentList
};