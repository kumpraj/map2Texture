const router = require('express').Router();
const locationsRouter = require('./locations');


router.use('/location',locationsRouter);

module.exports = router;