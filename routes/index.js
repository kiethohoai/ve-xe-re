// combine all routes in here
const express = require('express');
const rootRouter = express.Router();
const { stationRouter } = require('./station.routes');

rootRouter.use('/stations', stationRouter);

module.exports = { rootRouter };
