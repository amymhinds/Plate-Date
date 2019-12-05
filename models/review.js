var mongoose = require('mongoose');
var Schema = mongoose.Schema

var reviewSchema = new Schema ({
    rating: {
        type: String
      },
     review: {
        type: String,
      },
     rater: String,
     raterEmail: String
    }, {
      timestamps: true
});

module.exports = mongoose.model('Review', reviewSchema);