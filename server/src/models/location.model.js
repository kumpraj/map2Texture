//  importing mongoose package
const mongoose = require('mongoose');

//  defining location Schema
const locationSchema = new mongoose.Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Location',locationSchema);