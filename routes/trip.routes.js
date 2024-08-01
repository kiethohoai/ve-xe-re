const express = require('express');
const tripRouter = express.Router();

const {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
} = require('../controllers/trip.controllers');

tripRouter.post('/', createTrip);
tripRouter.get('/', getAllTrip);
tripRouter.delete('/:id', deleteTrip);
tripRouter.put('/:id', updateTrip);

// tripRouter.get('/:id', getDetailStation);

module.exports = {
  tripRouter,
};
