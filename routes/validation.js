// Validation
const Joi = require('@hapi/joi');

// Hotel Register Validation
const hotel_val = (data) => {
	const schema = {
		name: Joi.string().required(),
		servicesCount: Joi.number().required(),
		guestsCount: Joi.number().required(),
		services: Joi.required(),
		guests: Joi.required(),
	};
	return Joi.validate(data, schema);
};

// HotelChain Register Validation
const hotelchain_val = (data) => {
	const schema = {
		name: Joi.string().required(),
		allServicesCount: Joi.number().required(),
		allGuestsCount: Joi.number().required(),
		allHotelsCount: Joi.number().required(),
		allhotels: Joi.required(),
	};
	return Joi.validate(data, schema);
};

module.exports.hotel_val = hotel_val;
module.exports.hotelchain_val = hotelchain_val;
