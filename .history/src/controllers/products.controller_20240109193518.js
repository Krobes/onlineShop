const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body);
  } catch (error) {
    res.status(503).json({ fatal: error.message });
  }
};

module.exports = { getAllProducts, createProduct, updateProduct };
