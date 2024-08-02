// const { checkExist } = require('../middlewares/validations/checkExist');
const express = require('express');
const userRouter = express.Router();
const {
  register,
  login,
  uploadAvatar,
  getAllTrip,
} = require('../controllers/user.controllers');
const { uploadImage } = require('../middlewares/upload/upload-image');
const { authenticate } = require('../middlewares/auth/authenticate');

userRouter.post(
  '/upload-avatar',
  authenticate,
  uploadImage('user'),
  uploadAvatar,
);
userRouter.post('/register', register);
userRouter.post('/login', login);

// test
userRouter.get('/all-trip', getAllTrip);

// userRouter.get('/', getAllStation);
// userRouter.get('/:id', getDetailStation);
// userRouter.put('/:id', checkExist(Station), updateStation);
// userRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  userRouter,
};
