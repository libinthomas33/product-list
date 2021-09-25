//models
const productModel = require('../models/product.model');


const debugLog = require('../middlewares/debugLog');

exports.addProduct = (req, res) => {//api to create product
    if(!req.body.productName || !req.body.category_id){
        return res.status(400).send({ message: 'Bad request. Parameters missing!!' });
    }else{
        const product = new productModel({
            productName: req.body.productName,
            category_id: req.body.category_id ? req.body.category_id : null,
            parent_category_id: req.body.parent_category_id ? req.body.parent_category_id : null
        });
        product.save((productSaveErr, savedproduct) => {
            if (productSaveErr) {
                return res.status(500).send(productSaveErr);
            }
            res.status(200).send({ message: 'product added successfully!' });
        })
    }
}

exports.listProductsByCategoryId = (req, res) => {//api to create product
    if(!req.body.category_id){
        return res.status(400).send({ message: 'Bad request. Parameters missing!!' });
    }else{
        productModel.find({category_id: req.body.category_id}).sort({_id: -1})
        .then((categories) => {
            if (categories) {//if success return all categories
                return  res.status(200).send({ data: categories, message: 'Category fetched successfully!' });
            } else {//else return error message
                return  res.status(202).send({ data: [],  message: 'Category fetched successfully!' });
            }
        })
        .catch(err => {return  res.status(500).send({ data: [],  message: 'Error occured' })});
    }
}




