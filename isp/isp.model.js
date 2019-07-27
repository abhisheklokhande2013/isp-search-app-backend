//In db model we create a schema, it is the organisation of data as a blueprint of how the database is constructed
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ispSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true
    },
    lowest_price: {
      type: Number,
      unique: false,
      required: false
    },
    rating: {
      type: Number,
      unique: false,
      required: false
    },
    max_speed: {
      type: String,
      unique: false,
      required: false
    },
    description: {
      type: String,
      unique: false,
      required: false
    },
    contact_number: {
      type: String,
      unique: false,
      required: false
    },
    email: {
      type: String,
      unique: false,
      required: false
    },
    image: {
      type: String,
      unique: false,
      required: false
    },
    url: {
      type: String,
      unique: false,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = ispSchema;
