const router = require('express').Router();
const HotelSchema = require('../model/Hotel');
const HotelChainSchema = require('../model/HotelChain');

router.patch('/update/hotels/:id', async (req, res, next) => {

    try{
        const id = req.params.id;
        const updates = req.body;

        const result = await HotelSchema.findByIdAndUpdate(id, updates);

        res.status(200).send(result);

    } catch (error){

       console.log(error.message);
    }

});

router.patch('/update/hotelschain/:id', async (req, res, next) => {

    try{
        const id = req.params.id;
        const updates = req.body;

        const result = await HotelChainSchema.findByIdAndUpdate(id, updates);

        res.status(200).send(result);

    } catch (error){

       console.log(error.message);
    }

});

module.exports = router;