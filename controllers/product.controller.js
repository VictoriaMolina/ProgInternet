/**
 * Function that creates a new product based on params.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
function newProduct(req, res){
    res.json({name: "newProduct"});
};

/**
 * Function that returns a list of products stored in databased.
 * @param {*} req - Request Object
 * @param {*} res - request Object
 */
function productList(req, res){
    res.json({name: "productList"});
};

module.exports = {
    newProduct,
    productList
}