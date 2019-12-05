var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');
const zomatoURL = 'https://developers.zomato.com/api/v2.1/categories';


/* GET home page. */
router.get('/', function(req, res, next) {
//   const options = {
//     url: 'https://developers.zomato.com/api/v2.1/cities?q=San%20Diego',
//     headers: {
//         'user-key':process.env.ZOMATO_APIKEY,
       
//     }
    
// }
// request(options, (err, response, body) => {
//     res.send(body)
// })
  res.redirect('/users');
});

 // Google OAuth login route
 router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/users',
    failureRedirect : '/users'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});


module.exports = router;
