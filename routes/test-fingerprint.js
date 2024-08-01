const express = require('express');
const fingerPrintRouter = express.Router();

fingerPrintRouter.get('/', (req, res) => {
  const temp = req.fingerprint;
  res.send(temp);
});

module.exports = {
  fingerPrintRouter,
};
