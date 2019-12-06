const User = require('../models/user');
const Restaurant = require('../models/restaurant');
var request = require('request');

module.exports = {
  index, 
  show
};


function index(req, res) {
  User.find({}).populate('restaurants').exec(function(
    err, users){
      res.render('users/index', {users, 
        user: req.user,
        name: req.query.name});
    });
  }


function show(req, res) {
  User.findById(req.params.id).populate('restaurants').exec(function(
    err, user){
      let currentUser = req.user
    res.render('users/show', { title: 'User Detail', user, currentUser, restArray: [], loc: null
  });
});
}

 


