//models
const categoryModel = require('../models/category.model');


const debugLog = require('../middlewares/debugLog');

exports.saveCategory = (req, res) => {//api to create category
    if(!req.body.categoryName){
        return res.status(400).send({ message: 'Bad request. Parameters missing!!' });
    }else{
        const category = new categoryModel({
            categoryName: req.body.categoryName
        });
        category.save((categorySaveErr, savedCategory) => {
            if (categorySaveErr) {
                return res.status(500).send(categorySaveErr);
            }
            res.status(200).send({ message: 'Category added successfully!' });
        })
    }
}
