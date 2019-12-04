const Restaurant = require('../models/restaurant');
const User = require('../models/user');
const Review= require('../models/review');

module.exports = {
    new: newReview
   };
   
   function newReview(req, res){
       res.render('reviews/new'),{
           title: 'Reviews'
       }
   }
