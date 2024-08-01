// const { checkExist } = require('../middlewares/validations/checkExist');
const express = require('express');
const userRouter = express.Router();
const { register, login } = require('../controllers/user.controllers');

// lib uploadfile
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/avatars');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

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
