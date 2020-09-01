var express = require('express');
const router = express.Router();

const {
    newProduct,
    productList,
    productInfo
} = require ('../controllers/product.controller');

/**
 * Route to create a new product
 */
router.post('/create', newProduct);

/**
 * Route to get all product stored in database
 */
router.get('/list', productList);

/**
 * Route to get all product stored in database
 */
router.get('/info', productInfo);

module.exports = router;