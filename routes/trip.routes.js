const express = require('express');
const tripRouter = express.Router();

const { createTrip, getAllTrip } = require('../controllers/trip.controllers');

tripRouter.post('/', createTrip);
tripRouter.get('/', getAllTrip);

// tripRouter.get('/:id', getDetailStation);
// tripRouter.put('/:id', checkExist(Station), updateStation);
// tripRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  tripRouter,
};
