var express = require('express');
var router = express.Router();
var restaurantsCtrl = require('../controllers/restaurants');
var request = require('request');
const zomatoURL = 'https://developers.zomato.com/api/v2.1/categories';



router.post('/restaurants/show', restaurantsCtrl.listRes);
router.post('/restaurants/:id/:loc', restaurantsCtrl.create);
router.get('/restaurants/:id', restaurantsCtrl.show);


module.exports = router;