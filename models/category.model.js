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
  created_at: {
    type: Date,
    default: Date.now
  }
});

//exports the category schema
module.exports = mongoose.model('category', CategorySchema, 'category');