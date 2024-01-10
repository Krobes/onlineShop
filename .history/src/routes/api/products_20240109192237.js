const router = require('express').Router();


const ProductsController = require('../../controllers/products.controller');
router.get('/', ProductsController.getAllProducts);
router.post('/', ProductsController.createProduct);

module.exports = router;