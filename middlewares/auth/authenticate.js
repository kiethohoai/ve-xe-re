const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    const token = req.header('token');
    const decode = jwt.verify(token, 'ho-hoai-kiet-365');
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send('You need to login to use this feature!');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  authenticate,
};
