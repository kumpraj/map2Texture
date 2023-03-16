const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

//  creates an express application.
const app = express();

const port = process.env.PORT || 5000;

//  returns middleware that parses json
app.use(bodyParser.json());
app.use(cors());


app.listen(() => {
    console.log(`Server is running on port ${port}`);
});