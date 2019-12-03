const User = require('../models/user');
const Restaurant = require('../models/restaurant');

module.exports = {
  index, 
  show
};



// function index(req, res) {
//   User.find({}, function(err, users) {
//     res.render('users/index', {users, 
//       user: req.user,
//       name: req.query.name});
//   });
// }

function index(req, res) {
  User.find({}).populate('restaurants').exec(function(
    err, users){
      res.render('users/index', {users, 
        user: req.user,
        name: req.query.name});
    });
  }




function show(req, res) {
  User.findById(req.params.id, function(err, user) {
      res.render('users/show', { title: 'User Detail', user
    });
});
}




