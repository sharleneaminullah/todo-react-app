const mongoose = require("mongoose");

/* This model is a wrapper on the Mongoose schema. 
 * It defines the structure of the document, type of the property,  
 * default values, validators, etc. 
 */

const Todo = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    description: {
      type: String,
      required: false,
      trim: true,
      maxlength: 200,
    },
    dueDate: {
      type: Date,
      default: Date.now,
      required: true
    },        
  },
  { timestamps: true }
);

module.exports = mongoose.model("Todo", Todo);


