const Restaurant = require('../models/restaurant');
const User = require('../models/user');


module.exports = {
 create,
 show
};

function show(req, res){
  /*rest is the document of the Restaurant's find by id found */
  Restaurant.findById(req.params.id).populate('reviews').exec(function(err, rest){
    res.render('restaurants/show', {rest, user: req.user});
  });
}

/*querying the user ID so we know which user to push the restaurant in 
the user's restaurant array to */
function create(req, res){
    req.body.combinedName = req.body.resName + req.body.city;
    Restaurant.findOne({combinedName: req.body.combinedName}, function(err, restaurant) {
      if(!restaurant){
      Restaurant.create(req.body, function(err, restaurant) {
        req.user.restaurants.push(restaurant._id);
        req.user.save(function(err){
          res.redirect(`/restaurants/${restaurant._id}`);
      });
    });
  }
  else{
    req.user.restaurants.push(restaurant._id);
    req.user.save(function(err){
      res.redirect(`/restaurants/${restaurant._id}`);
    });
  }
});
}





