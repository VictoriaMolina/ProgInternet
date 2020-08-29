const express = require('express');
const router = express.Router();

function operationsList(req, res){
    const body = "Hola, esta es la API matemática y puedes hacer uso de las siguientes operaciones:\n" +
    "/suma\n" +
    "/resta\n" +
    "multiplicacion\n" +
    "division\n" + 
    "Todas utilizan dos parametros";
    res.status(200).send(body);
};

router.get('/', operationsList);

router.post('/suma', function(req, res){
    let value1 = req.body.v1;
    let value2 = req.body.v2;

    if (typeof value1 !== 'int'){
        value1 = parseInt(value1);
        value2 = parseInt(value2);
    }

    const result = value1 + value2;

    res.status(200).json({
        result: result
    });
});

function operationsList(req, res){
    let value1 = req.query.v1;
    let value2 = req.query.v2;

    if (typeof value1 !== 'int'){
        value1 = parseInt(value1);
        value2 = parseInt(value2);
    }

    const result = value1 - value2;

    res.status(200).send(result.toString());
};

router.get('/resta', operationsList);

router.get ('/multiplicacion/:v1/:/v2', function(req, res){
    let value1 = req.params.v1;
    let value2 = req.params.v2;

    if (typeof value1 !== 'int'){
        value1 = parseInt(value1);
        value2 = parseInt(value2);
    }

    const result = value1 * value2;

    res.status(200).send(result.toString());

});

router.post('/division', function(req, res){
    let value1 = req.body.v1;
    let value2 = req.body.v2;

    if (typeof value1 !== 'int'){
        value1 = parseInt(value1);
        value2 = parseInt(value2);
    }

    const result = value1 / value2;

    res.status(200).json({
        result:result
    });
});

module.exports = router;