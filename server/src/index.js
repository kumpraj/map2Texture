require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const locationsRouter = require('./routes/index');
const { dbConnect } = require('./database');

//  creates an express application
const app = express();

const port = process.env.PORT || 5000;

//  returns middleware that parses json
app.use(bodyParser.json());
app.use(cors());

// calling dbConnect fn to connect to database
dbConnect();
app.use('/locations',locationsRouter);

app.listen(() => {
    console.log(`Server is running on port ${port}`);
});