var express = require('express');
const router = express.Router();

const {
    newProduct,
    productList
} = require ('../controllers/product.controller');

/**
 * Route to create a new product
 */
router.post('/create', newProduct);

/**
 * Route to get all product stored in database
 */
router.post('/list', productList);

module.exports = router;