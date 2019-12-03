const User = require('../models/user');

module.exports = {
  index, 
  show, 
  create
};

function create(req, res){
  
}

function index(req, res) {
  User.find({}, function(err, users) {
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




