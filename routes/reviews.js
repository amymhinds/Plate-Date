var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
var request = require('request');


router.post('/restaurants/:id/reviews', reviewsCtrl.create);




module.exports = router;