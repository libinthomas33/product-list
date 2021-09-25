'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
    Category Schema
**/
var CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true
  },
  isparent: {
    type: Number
  },
  parent_id: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

//exports the category schema
module.exports = mongoose.model('category', CategorySchema, 'category');