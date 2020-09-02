const { Appointments } = require("../models/appointment.models");

/**
 * Function that creates a new appointment.
 * @param {*} req 
 * @param {*} res 
 */
async function newAppointment(req, res){
    const body = req.body;

    if(body.name && body.rtime && body.desc && body.date && body.cost){
        try{
            const newAppointment = await new Appointments({
                name: body.name,
                description: body.desc,
                requiredTimer: body.rtime,
                date: body.date,
                cost: body.cost
            }).save();

            if(newAppointment) {
                res.json({'data': newAppointment});
            } else {
                res.status(500).send("ERROR STORING NEW SERVICES");
            }
    
        } catch(err){
            res.status(500).send("ERROR STORING NEW SERVICES");
        }
        
    }else {
        res.status(402).send("BAD PARAMETERS");
    }

};

/**
 * Function that returns the appointments of the database.
 * @param {*} req 
 * @param {*} res 
 */
async function appointmentList(req, res){
    try{
        const results = await Appointments.find({});
        if(results){
            res.json({
                'data': results
            });
        } else {
            res.json({
                'data': {}
            });
        }

        
    }catch(err){
        res.json({
            'data': {}
        });
    }
};

/**
 * Function that returns the appointments of the database.
 * @param {*} req 
 * @param {*} res 
 */
async function appointmentInfo(req, res){
    const apointmentId = req.query.aid;

    if(apointmentId) {
        try{
            const results = await Appointments.findOne({
                _id: apointmentId
            });
                
            if(results){
                res.json({
                    'data': results
                });
            } else {
                res.json({
                    'data': {}
                });
            }
    
            
        }catch(err){
            res.json({
                'data': {}
            });
        }

    } else {
        res.status(402.).send("BAD PARAMETERS")
    }
};

/**
 * Function to update the appointments
 */
async function appointmentUpdate(req, res){
    const updateId = req.body.id;

        try{

            if(updateId){
                await Appointments.updateOne({
                    _id: updateId
                }, {

                    $set: {
                        cost: 800,
                        requiredTime: 1
                    }
                });

                res.status(200).send("SUCCESS")
            } else {
                res.status(402).send("BAD PARAMETERS")
                };

        }catch(err){
            res.status(500).send("ERROR")
            console.log(err);
        }       
};

/**
 * Function to delete the appointments
 */
async function appointmentDelete(req, res){
    const appointmentId = req.body.id;

    if(appointmentId) {
        try{
            const results = await Appointments.deleteOne();

            if(results) {
                res.json({'data': results});
            } else {
                res.status(500).send("ERROR STORING NEW SERVICES");
            }

        }catch(err){
            res.status(500).send("ERROR DELETING");
        }

    } else {
        res.status(402.).send("BAD PARAMETERS")
    }
};

module.exports = {
    newAppointment,
    appointmentList,
    appointmentInfo,
    appointmentUpdate,
    appointmentDelete
};