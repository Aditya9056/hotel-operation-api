const router = require('express').Router();
const HotelSchema = require('../model/Hotel');
const HotelChainSchema = require('../model/HotelChain');

router.delete('/delete/hotel/:id', async(req, res, next) => {

    try{
        const id = req.params.id;

        const result = await HotelSchema.findByIdAndDelete(id);

        res.status(200).send(result);

    } catch (error){

       console.log(error.message);
    }

});

router.delete('/delete/hotelchain/:id', async(req, res, next) => {

    try{
        const id = req.params.id;

        const result = await HotelChainSchema.findByIdAndDelete(id);

        res.status(200).send(result);

    } catch (error){

       console.log(error.message);
    }

});

module.exports = router;