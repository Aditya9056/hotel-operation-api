const { number, object } = require('@hapi/joi');
const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    servicesCount: {
        type: Number,
        required: true,
    },
    guestsCount: {
        type: Number,
        required: true,
    },
    services: {
        type: Object,
        required: true,
        max: 255
    },
    guests: {
        type: Object,
        required: true,
    }
});


module.exports = mongoose.model('Hotel', hotelSchema);