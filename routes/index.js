// combine all routes in here
const express = require('express');
const rootRouter = express.Router();
const { stationRouter } = require('./station.routes');
const { userRouter } = require('./user.routes');
const { tripRouter } = require('./trip.routes');

rootRouter.use('/stations', stationRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/trips', tripRouter);

module.exports = { rootRouter };
