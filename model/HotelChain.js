const mongoose = require('mongoose');

const hotelChainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255
    },
    allServicesCount: {
        type: Number,
        required: true
    },
    allGuestsCount: {
        type: Number,
        required: true,
    },
    allHotelsCount: {
        type: Number,
        required: true,
    },
    allhotels: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model('HotelChain', hotelChainSchema);
