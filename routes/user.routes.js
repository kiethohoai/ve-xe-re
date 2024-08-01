// const { checkExist } = require('../middlewares/validations/checkExist');
const express = require('express');
const userRouter = express.Router();
const { register, login } = require('../controllers/user.controllers');

// lib uploadfile
const multer = require('multer');
const upload = multer({ dest: './uploads/avatars' });

userRouter.post('/upload-avatar', upload.single('avatar'), (req, res) => {
  res.send('Upload File Image Successfully');
});

userRouter.post('/register', register);
userRouter.post('/login', login);

// userRouter.get('/', getAllStation);
// userRouter.get('/:id', getDetailStation);
// userRouter.put('/:id', checkExist(Station), updateStation);
// userRouter.delete('/:id', checkExist(Station), deleteStation);

module.exports = {
  userRouter,
};
