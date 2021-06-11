const mongoose = require('mongoose');

const allData = new mongoose.Schema({
    totalGuests: {
        type: Number,
        required: true,
    },
    totalServices: {
        type: Number,
        required: true
    },
    totalHotels: {
        type: Number,
        required: true,
    },
    totalHotelsChains: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('allData', allData);
