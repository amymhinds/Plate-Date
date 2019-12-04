const Restaurant = require('../models/restaurant');
const User = require('../models/user');


module.exports = {
 create

};

// function newRestaurant(req, res) {
//   res.render('users/show', {
//     title: 'Add Restaurant',
//   });
// }

/*querying the user ID so we know which user to push the restaurant in 
the user's restaurant array to */
function create(req, res){
    Restaurant.create(req.body, function(err, restaurant) {
      req.user.restaurants.push(restaurant._id);
      req.user.save(function(err){
        res.redirect(`/users/${req.params.id}`);
    });
  });
}





