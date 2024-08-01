const express = require('express');
const tripRouter = express.Router();

const { createTrip } = require('../controllers/trip.controllers');

// const { Station } = require('../models');
// const { checkExist } = require('../middlewares/validations/checkExist');
// const { authenticate } = require('../middlewares/auth/authenticate');
// const { authorize } = require('../middlewares/auth/authorize');

tripRouter.post('/', createTrip);
// tripRouter.get('/', getAllStation);
// tripRouter.get('/:id', getDetailStation);
// tripRouter.put('/:id', checkExist(Station), updateStation);
// tripRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  tripRouter,
};
