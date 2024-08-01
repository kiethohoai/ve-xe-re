// lib uploadfile
const multer = require('multer');
const { mkdirp } = require('mkdirp');

const uploadImage = (type) => {
  mkdirp.sync(`./public/images/${type}s`);
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./public/images/${type}s`);
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

  // return upload.single('avatar');
  return upload.single(type);
};

module.exports = { uploadImage };
