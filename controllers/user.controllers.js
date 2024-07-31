const { User } = require('../models');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { name, email, password, numberPhone } = req.body;
  try {
    // Tao chuoi ma hoa
    const salt = bcrypt.genSaltSync(10);

    // Ma hoa salt + password
    const hashPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      numberPhone,
    });

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Export
module.exports = {
  register,
};
