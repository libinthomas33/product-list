const express = require('express');
const router = express.Router();

//controllers
var productController = require('../controllers/product.controller');

//middlewares

//define the routes
router.post('/save', productController.addProduct);
router.post('/get-products-by-category', productController.listProductsByCategoryId);


module.exports = router;