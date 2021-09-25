const express = require('express');
const router = express.Router();

//controllers
var categoryController = require('../controllers/category.controller');

//middlewares

//define the routes
router.post('/save', categoryController.saveCategory);

module.exports = router;