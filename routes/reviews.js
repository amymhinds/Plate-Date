var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');
var request = require('request');


router.post('/reviews/restaurants/:id', reviewsCtrl.create);
router.delete('/restaurants/:id/reviews/:revID', reviewsCtrl.delete);




module.exports = router;