//  configuring dotenv package
require('dotenv').config();

const express = require('express');

const { dbConnect } = require('./config/database');

const locationsRoutes = require('./routes/locationRoutes');

//  creates an express application
const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

//  returns middleware that parses json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// calling dbConnect fn to connect to database
dbConnect();
app.use('/',locationsRoutes);

//  exporting express app setup
module.exports = app;

