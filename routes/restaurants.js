var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants');
var request = require('request');
const zomatoURL = 'https://developers.zomato.com/api/v2.1/categories';



router.post('/users/:id/restaurants/create', restaurantsCtrl.create);

// router.get('/users/:id/restaurants', restaurantsCtrl.new);


module.exports = router;