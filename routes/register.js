const router = require('express').Router();
const Hotels = require('../model/Hotel');
const HotelsChain = require('../model/HotelChain');
const { hotel_val, hotelchain_val } = require('../routes/validation');

router.post('/register/hotel', async (req, res) => {

	// Validation before making the hotel
	const { error } = hotel_val(req.body);

	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	// Checking if already exist
	const hotelExist = await Hotels.findOne({ name: req.body.name });

	if (hotelExist) {
		return res.status(400).send('Hotel already Exist');
	}
    
    // Create a new hotel
	const hotel = new Hotels({
		name: req.body.name,
		servicesCount: req.body.servicesCount,
		guestsCount: req.body.guestsCount,
		services: req.body.services,
		guests: req.body.guests,
	});

	try {
        const savedHotel = await hotel.save();
		res.send(savedHotel);
	} catch (err) {
		res.status(404).send(err);
	}
});

router.post('/register/hotelchain', async (req, res) => {

	// Validation before making the hotel
	const { error } = hotelchain_val(req.body);

	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	// Checking if already exist
	const hotelChainExist = await HotelsChain.findOne({ name: req.body.name });

	if (hotelChainExist) {
		return res.status(400).send('Hotel Chain already Exist');
	}
    
    // Create a new hotelChain
	const hotelchain = new HotelsChain({
		name: req.body.name,
		allServicesCount: req.body.allServicesCount,
		allGuestsCount: req.body.allGuestsCount,
		allHotelsCount: req.body.allHotelsCount,
		allhotels: req.body.allhotels,
	});

	try {
        const savedHotelChain = await hotelchain.save();
		res.send(savedHotelChain);
	} catch (err) {
		res.status(404).send(err);
	}

});

module.exports = router;