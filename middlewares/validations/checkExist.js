const { where } = require('sequelize');

const checkExist = (Modal) => {
  return async (req, res, next) => {
    const { id } = req.params;
    const dataModal = await Modal.findOne({
      where: { id },
    });

    if (dataModal) next();
    else res.status(404).send('NOT FOUND');
  };
};

module.exports = {
  checkExist,
};
