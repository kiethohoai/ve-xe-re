// const path = require('path');
const express = require('express');
const { sequelize } = require('./models/index');
const app = express();
const port = 3000;

// config json
app.use(express.json());

// config static files
app.use(express.static(`${__dirname}/public`));
// const publicPathDirectory = path.join(__dirname, './public');

app.listen(port, async () => {
  console.log(`App listening on http;//localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
