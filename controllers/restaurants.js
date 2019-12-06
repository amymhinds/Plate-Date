const Restaurant = require('../models/restaurant');
const User = require('../models/user');
const request = require('request');

module.exports = {
 create,
 show, 
 listRes
};

function listRes(req, res){
  let lat;
  let long;
  if(req.body.city==='SD'){
    lat = 32.715736;
    long = -117.161087;
  }
  else if(req.body.city==='LA'){
    lat = 34.0522;
    long = -118.2437;
  }
  if(req.body.city==='SF'){
    lat = 37.7749;
    long = -122.4194;
  }
  if(req.body.city==='SEA'){
    lat = 47.6062;
    long = -122.3321;
  }
  const options = {
    url: `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${long}&cuisines=${req.body.cuisine}`,
    headers: {
        'user-key': process.env.ZOMATO_APIKEY,
    }
  }
    request(options, (err, response, body) => {
      let data = JSON.parse(body);
      console.log('this is the data' + data);
      let restArray=[];
      data.restaurants.forEach(restaurant =>{
        restArray.push(restaurant.restaurant.name)
      })
      restArray.sort();
      console.log('restarray' + restArray);
      User.findById(req.user._id).populate('restaurants').exec(function(
        err, user){
          res.render('users/show', {rest: null, currentUser: req.user, body: data, user, restArray, loc: req.body.city
    });
  });
});
}


function show(req, res){
  /*rest is the document of the Restaurant's find by id found */
  Restaurant.findById(req.params.id).populate('reviews').exec(function(err, rest){
    res.render('restaurants/show', {rest, user: req.user});
  });
}


/*querying the user ID so we know which user to push the restaurant in 
the user's restaurant array to */
function create(req, res){
    req.body.city = req.params.loc
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