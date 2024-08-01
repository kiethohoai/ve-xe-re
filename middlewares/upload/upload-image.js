// lib uploadfile
const multer = require('multer');

const uploadImage = () => {
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
      const check = extensionImageList.includes(extension);
      if (check) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file name extensions'));
      }
    },
  });

  return upload.single('avatar');
};

module.exports = { uploadImage };
