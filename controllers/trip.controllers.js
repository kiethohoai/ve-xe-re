const { where } = require('sequelize');
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

// todo deleteTrip
const deleteTrip = async (req, res) => {
  const { id } = req.params;
  await Trip.destroy({
    where: {
      id,
    },
  });

  res.send(`Trip ${id} Deleted `);
};

// todo updateTrip
const updateTrip = async (req, res) => {
  const { id } = req.params;
  const { startTime, price, fromStation, toStation } = req.body;

  await Trip.update(
    { startTime, price, fromStation, toStation },
    {
      where: {
        id,
      },
    },
  );
  res.send(`Update TripID = ${id} Successfully!`);
};

module.exports = {
  createTrip,
  getAllTrip,
  deleteTrip,
  updateTrip,
};
