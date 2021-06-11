const router = require('express').Router();
const HotelSchema = require('../model/Hotel');
const HotelChainSchema = require('../model/HotelChain');
const { hotelchain_val } = require('./validation');

// Get hotels data
router.get('/get/hotels', (req, res, next) => {

  HotelSchema.find({}, (err, response) => {
      if (err) {
        res.send(err);
      } else {
        console.log("Response", response)
        res.status(200).send(response);
      }
    });

});

// Get hotelchain data
router.get('/get/hotelschain', (req, res, next) => {

  HotelChainSchema.find({}, (err, response) => {
      if (err) {
        res.send(err);
      } else {
        console.log("Response", response)
        res.status(200).send(response);
      }
        
    });

});

module.exports = router;