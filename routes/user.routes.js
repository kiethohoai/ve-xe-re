// const { checkExist } = require('../middlewares/validations/checkExist');
const jwt = require('jsonwebtoken');
const express = require('express');
const userRouter = express.Router();
const { register, login } = require('../controllers/user.controllers');

userRouter.post('/register', register);
userRouter.post('/login', login);

// userRouter.get('/', getAllStation);
// userRouter.get('/:id', getDetailStation);
// userRouter.put('/:id', checkExist(Station), updateStation);
// userRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  userRouter,
};
