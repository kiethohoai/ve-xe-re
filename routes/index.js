// combine all routes in here
const express = require('express');
const rootRouter = express.Router();
const { stationRouter } = require('./station.routes');
const { userRouter } = require('./user.routes');
const { tripRouter } = require('./trip.routes');
const { fingerPrintRouter } = require('./test-fingerprint');

rootRouter.use('/stations', stationRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/trips', tripRouter);

// test
rootRouter.use('/test-finger-print', fingerPrintRouter);

module.exports = { rootRouter };
