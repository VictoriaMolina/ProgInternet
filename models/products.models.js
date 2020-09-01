const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        cost:{
            type: Number,
            required: true,
        }, 
        image:{
            type: String,
            required: false
        }
    }
);

const Products = mongoose.model('Product', productSchema);

module.exports = {
    Products
};