const express = require('express');
const userRouter = express.Router();

const { register } = require('../controllers/user.controllers');
const { checkExist } = require('../middlewares/validations/checkExist');

userRouter.post('/register', register);

// userRouter.get('/', getAllStation);
// userRouter.get('/:id', getDetailStation);
// userRouter.put('/:id', checkExist(Station), updateStation);
// userRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  userRouter,
};
