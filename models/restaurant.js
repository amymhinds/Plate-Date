var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  resName: {
    type: String
  },
  city: {
    type: String,
  },
  combinedName: {
    type: String,
  }
,
reviews: [{
  type: Schema.Types.ObjectId,
  ref: 'Review'
}]
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Restaurant', restaurantSchema);