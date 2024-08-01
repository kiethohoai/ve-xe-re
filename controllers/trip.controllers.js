const { Trip } = require('../models');

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

module.exports = {
  createTrip,
};
