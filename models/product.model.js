'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
    product Schema
**/
var productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  category_id: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  parent_category_id: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

//exports the product schema
module.exports = mongoose.model('product', productSchema, 'product');