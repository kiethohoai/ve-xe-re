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

const upload = multer({
  storage: storage,
  fileFilter: function name(req, file, cb) {
    const extensionImageList = ['jpg', 'png'];
    const extension = file.originalname.slice(-3);
    console.log('🚀CHECK  extension =', extension);

    const check = extensionImageList.includes(extension);
    if (check) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file name extensions'));
    }
  },
});

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
