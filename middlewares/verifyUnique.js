//models
const categoryModel = require('../models/category.model');

function checkCategoryUniqueness(req, res, next) {
    if (req.body.categoryName) {
        categoryModel.findOne({ categoryName: req.body.categoryName }, (categoryFetchErr, categoryExists) => {
            if(categoryFetchErr){
                return res.status(500).send(categoryFetchErr);
            }
            if (categoryExists) {
                return res.status(203).send({messages: 'Category exists!'});
            }
            next();
        })
    } else {
        return res.status(500).send({messages: 'Bad request. Parameters missing!!.'});
    }
}

module.exports = {
    checkCategoryUniqueness: checkCategoryUniqueness
}
