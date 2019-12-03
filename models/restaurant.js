var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  resName: {
    type: String
  },
  city: {
    type: String,
  } 
}, {
  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);