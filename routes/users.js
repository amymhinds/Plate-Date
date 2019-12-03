var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var request = require('request');
const zomatoURL = 'https://developers.zomato.com/api/v2.1/categories';


router.post('/users/city', usersCtrl.create);

/*get external api*/
router.post('/users', function(req, res) {
    const options = {
        url: zomatoURL,
        headers: {
            'user-key':process.env.ZOMATO_APIKEY
        }

    }
    request(options, () => {
        
    })
//   request(
//     zomatoURL + 'users/' + req.body.username + 
//       '?access_token=' + process.env.ZOMATO_APIKEY,
//     function(err, response, body) {
//       res.render('index', {userData: body});
//     }
//   );
});

/* GET users listing. */
router.get('/', usersCtrl.index);

router.get('/:id', usersCtrl.show);


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}   


module.exports = router;
