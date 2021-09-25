//models
const categoryModel = require('../models/category.model');


const debugLog = require('../middlewares/debugLog');

exports.saveCategory = (req, res) => {//api to create category
    if(!req.body.categoryName){
        return res.status(400).send({ message: 'Bad request. Parameters missing!!' });
    }else{
        const category = new categoryModel({
            categoryName: req.body.categoryName,
            isparent: req.body.isparent ? req.body.isparent : 0,
            parent_id: req.body.selectParentid ? req.body.selectParentid : null
        });
        category.save((categorySaveErr, savedCategory) => {
            if (categorySaveErr) {
                return res.status(500).send(categorySaveErr);
            }
            res.status(200).send({ message: 'Category added successfully!' });
        })
    }
}

exports.listCategory = async (req, res) => {
    let condition = {isparent: 1};
    if(!req.body.isparent){
        condition.isparent = 0;
    }
    await categoryModel.find(condition).sort({_id: -1})
        .then((categories) => {
            if (categories) {//if success return all categories
                return  res.status(200).send({ data: categories, message: 'Category fetched successfully!' });
            } else {//else return error message
                return  res.status(202).send({ data: [],  message: 'Category fetched successfully!' });
            }
        })
        .catch(err => {return  res.status(500).send({ data: [],  message: 'Error occured' })});
}

exports.listCategorySubCategory = async (req, res) => {
    await categoryModel.aggregate([
        {$match:{isparent:0}},
        {$lookup: {
            from: "category",
            foreignField: "parent_id",
            localField: "_id",
            as: "subCategories"
        }}])
        .then((categories) => {
            if (categories) {//if success return all categories
                return  res.status(200).send({ data: categories, message: 'Category fetched successfully!' });
            } else {//else return error message
                return  res.status(202).send({ data: [],  message: 'Category fetched successfully!' });
            }
        })
        .catch(err => {return  res.status(500).send({ data: [],  message: 'Error occured' })});
}
