// const path = require('path');
const express = require('express');
const Fingerprint = require('express-fingerprint');
const app = express();
const port = 3000;
const { sequelize } = require('./models/index');
const { rootRouter } = require('./routes');

// config Fingerprint
app.use(Fingerprint());

// config json
app.use(express.json());

// config static files
app.use('/public', express.static(`${__dirname}/public`));
// const publicPathDirectory = path.join(__dirname, './public');

// config routes
app.use('/api/v1', rootRouter);

app.listen(port, async () => {
  console.log(`App listening on http;//localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
