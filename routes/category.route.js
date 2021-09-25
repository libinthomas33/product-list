const express = require('express');
const router = express.Router();

//controllers
var categoryController = require('../controllers/category.controller');

//middlewares
const verifyUnique = require('../middlewares/verifyUnique');

//define the routes
router.post('/save', [verifyUnique.checkCategoryUniqueness], categoryController.saveCategory);
router.post('/list',categoryController.listCategory);
router.post('/cat-sub' ,categoryController.listCategorySubCategory);

module.exports = router;