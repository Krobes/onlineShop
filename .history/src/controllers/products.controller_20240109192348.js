const Product = require('../models/product.model');

const getAllProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch(error){
        res.status(503).json({ fatal: error.message });
    }
};

const createProduct = async(req,res) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
};

module.exports = { getAllProducts, createProduct };