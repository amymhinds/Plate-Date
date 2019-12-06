var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');
var request = require('request');
const zomatoURL = 'https://developers.zomato.com/api/v2.1/categories';


/* GET users listing. */
router.get('/', usersCtrl.index);

router.get('/:id', usersCtrl.show);

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}   


module.exports = router;
