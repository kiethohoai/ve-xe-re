// Phân quyền users đã login

const authorize = (arrType) => {
  return (req, res, next) => {
    const { user } = req;
    console.log('🚀CHECK  user =', user);

    if (arrType.findIndex((el) => el === user?.type) > -1) {
      next();
    } else {
      res.status(403).send('Đã đăng nhập. Giới hạn quyền truy cập!');
    }
  };
};

module.exports = { authorize };
