const { Station } = require('./../models');

const createStation = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStation = async (req, res) => {
  try {
    const stationList = await Station.findAll();
    res.status(200).send(stationList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailStation = async (req, res) => {
  const { id } = req.params;
  try {
    const stationDetail = await Station.findOne({ where: { id } });
    if (stationDetail) res.status(200).send(stationDetail);
    else res.status(500).send('NOT FOUND!');
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createStation,
  getAllStation,
  getDetailStation,
};
