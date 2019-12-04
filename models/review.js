var mongoose = require('Mongoose');
var Schema = mongoose.Schema

var reviewSchema = new Schema ({
    rating: {
        type: String
      },
     review: {
        type: String,
      } 
    }, {
      timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);