const express = require('express');
const stationRouter = express.Router();
const {
  createStation,
  getAllStation,
  getDetailStation,
  updateStation,
  deleteStation,
} = require('../controllers/station.controllers');
const { checkExist } = require('../middlewares/validations/checkExist');
const { Station } = require('./../models');

stationRouter.post('/', createStation);
stationRouter.get('/', getAllStation);
stationRouter.get('/:id', getDetailStation);
stationRouter.put('/:id', checkExist(Station), updateStation);
stationRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  stationRouter,
};
