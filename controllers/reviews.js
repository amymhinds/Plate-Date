const Restaurant = require('../models/restaurant');
const User = require('../models/user');
const Review= require('../models/review');

module.exports = {
    create
   };
   
   function create(req, res){
    Review.create(req.body, function(err, review) {
        Restaurant.findById(req.params.id, function(err, rest){
            rest.reviews.push(review._id);
            rest.save(function(err){
                console.log(req.user);
                req.user.reviews.push(review._id);
                req.user.save(function(err){
                    res.redirect(`/restaurants/${req.params.id}`)
                });
            });
        });
    });
}
