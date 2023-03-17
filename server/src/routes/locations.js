const express = require('express');
let Location = require('../models/location.model');

// creates a new router instance using the Router() function
const router = express.Router();

router.get('/', (req, res) => {
    Location.find()
    .then(locations => res.json(locations))
    .catch((err) => { res.status(400).json('Error: '+ err)})
});

router.post('/add', (req,res) => {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const newLocation = new Location({ latitude, longitude });

    newLocation.save()
    .then(() => res.json('Location Added'))
    .catch((err => { res.status(400).json('Error: '+err)}))
})

module.exports = router;