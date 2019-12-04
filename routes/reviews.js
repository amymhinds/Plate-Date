var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
var request = require('request');


router.get('restaurants/:id/review/new', reviewsCtrl.new);

// router.get('/users/:id/restaurants', restaurantsCtrl.new);


module.exports = router;