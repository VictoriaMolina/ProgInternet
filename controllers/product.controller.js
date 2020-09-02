const {Products} = require('../models/products.models');

/**
 * Function that creates a new product based on params.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function newProduct(req, res){
    const body = req.body;

    if(body.name && body.cost && body.desc && body.img){
        try{
            const newProduct = await new Products({
                name: body.name,
                description: body.desc,
                image: body.img,
                cost: body.cost
            }).save();

            if(newProduct) {
                res.json({'data': newProduct});
            } else {
                res.status(500).send("ERROR STORING NEW PRODUCTS");
            }
    
        } catch(err){
            res.status(500).send("ERROR STORING NEW PRODUCTS");
        }
        
    }else {
        res.status(402).send("BAD PARAMETERS");
    }

};

/**
 * Function that returns a list of products stored in databased.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function productList(req, res){
    try{
        const results = await Products.find({});
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
 * Function that returns a list of products stored in databased.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
async function productInfo(req, res){
    const productId = req.query.pid;

    if(productId) {
        try{
            const results = await Products.findOne({
                _id: productId
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
 * Function that updates the information of the products.
 * @param {*} req 
 * @param {*} res 
 */
async function productUpdate(req, res){
    const updateId = req.body.id;

        try{

            if(updateId){
                await Products.updateOne({
                    _id: updateId
                }, {

                    $set: {
                        cost: 2700,
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
 * Function to delete products.
 * @param {*} req 
 * @param {*} res 
 */
async function productDelete(req, res){
    const productId = req.body.id;

    if(productId) {
        try{
            const results = await Products.deleteOne();

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
    newProduct,
    productList,
    productInfo,
    productUpdate,
    productDelete
}