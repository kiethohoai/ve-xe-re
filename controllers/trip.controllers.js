const { Trip } = require('../models');
const { Station } = require('../models');

// todo createTrip
const createTrip = async (req, res) => {
  const { fromStation, toStation, startTime, price } = req.body;
  const newTrip = await Trip.create({
    fromStation,
    toStation,
    startTime,
    price,
  });
  res.status(201).send(newTrip);
};

// todo getAllTrip
const getAllTrip = async (req, res) => {
  const tripList = await Trip.findAll({
    include: [
      {
        model: Station,
        as: 'from',
      },
      {
        model: Station,
        as: 'to',
      },
    ],
  });
  if (tripList) res.status(200).send(tripList);
  else res.status(404).send('Not Found List of Trips');
};

module.exports = {
  createTrip,
  getAllTrip,
};
