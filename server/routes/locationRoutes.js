const express = require('express');
let Location = require('../models/location.model');

// creates a new router instance using the Router() function
const router = express.Router();


const getLocations = async (req,res) => {
    try {
        //  fetch all locations
        const locations = await Location.find({});

        res.status(200).json({
            success:true,
            message: "fetched all location",
            locations
        })
    } catch (error) {
        console.log("Error while fetching locations");
        console.log("Error: ",error);
        
        res.status(400).json({
            success: false,
            message: "Error in getting all locations",
        }) 
    }
}

const addLocation = async (req,res) => {
    try {
        //  get location co-ordinates
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;

        if(!latitude || !longitude){
            return res.status(400).json({
                error: "Both latitude and longitude are required"
            })
        }

        // create a new location co-ordinate
        const newLocation = await Location.create({ latitude, longitude });

        // send a success response of a created new location
        res.status(200).json({
            success: true,
            message: "new Location added",
            newLocation
        });

    } catch (error) {
        console.log("Error while adding new Location");
        console.log("Error: ", error);

        res.status(400).json({
            success: false,
            message: "failed to add new Location",
            error
        });
    }
}

router.get('/', (req, res) => {
    res.send('<h1>Map2Texture</h1>');
    
});

router.get('/about',(req,res) => {
    res.send('<h1>About Page</h1>')
})
router.get('/getLocations', getLocations);
router.post('/addLocation', addLocation);


module.exports = router;

