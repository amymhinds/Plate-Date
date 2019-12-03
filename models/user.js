var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  name: String,
  googleId: String,
  restaurants: [{
  type: Schema.Types.ObjectId,
  ref: 'Restaurant'
}]
},
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);