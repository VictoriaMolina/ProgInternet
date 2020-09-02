const {Services} = require('../models/services.models');
/**
 * Function that creates a new service.
 * @param {*} req 
 * @param {*} res 
 */
async function newService(req, res){
    const body = req.body;
    console.log(body);
    console.log(body.name);
    console.log(body.rtime);
    console.log(body.desc);

    

    if(body.name && body.rtime && body.desc){
        try{
            const newService = await new Services({
                name: body.name,
                description: body.desc,
                requiredTimer: body.rtime,
                cost: body.cost ? body.cost : 0,
                image: body.image ? body.image : ""
            }).save();

            if(newService) {
                res.json({'data': newService});
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
 * Function that returns the services of the database.
 * @param {*} req 
 * @param {*} res 
 */
async function servicesList(req, res){
    try{
        const results = await Services.find({});
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

async function serviceInfo(req, res){
    const serviceId = req.query.sid;

    if(serviceId) {
        try{
            const results = await Services.findOne({
                _id: serviceId
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

async function serviceUpdate(req, res){
    const updateId = req.body.id;

        try{

            if(updateId){
                await Services.updateOne({
                    _id: updateId
                }, {

                    $set: {
                        cost: 550,
                        requiredTime: 4
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

async function serviceDelete(req, res){
    const serviceId = req.body.id;

    if(serviceId) {
        try{
            const results = await Services.deleteOne();

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
    newService,
    servicesList,
    serviceInfo, 
    serviceUpdate,
    serviceDelete
};