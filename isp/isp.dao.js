//In the Data Access Object (DOA) layer, we can define the function which is directly connected to the database and fetch data and save data from and to the database.
var mongoose = require('mongoose');
var ispSchema = require('./isp.model');

//Statics are pretty much the same as methods but allow for defining functions that exist directly on your Model.
ispSchema.statics = {
  create: function(data, cb) {
    var isp = new this(data);
    isp.save(cb);
  },

  get: function(query, cb) {
    this.find(query, cb);
  },

  update: function(query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function(query, cb) {
    this.findOneAndDelete(query, cb);
  }
};

var ispModel = mongoose.model('isps', ispSchema);
module.exports = ispModel;
