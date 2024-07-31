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

/* LOGIN
  1 - Tìm ra user đang đăng nhập dựa trên Email?
  2 - Kiểm tra mật khẩu có đúng hay không?
  */
const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    const isAuth = bcrypt.compareSync(password, user.password);
    if (isAuth) res.status(200).send({ message: 'Login Successfully!' });
    else res.status(500).send({ message: 'Incorrect User/Password!' });
  } else {
    res.status(404).send({message : "Not Found User!"})
  }
};

// Export
module.exports = {
  register,
  login,
};
