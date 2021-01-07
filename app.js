const express = require('express');
const { SERVER_PORT } = require('./env');
const app = express();

// docs

// pre-route middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require('./routes')(app);

// post-route middlewares
app.set('x-powered-by', false);

// server setup
const server = app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});

// process setup
process.on('unhandledRejection', (error) => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('uncaughtException', (error) => {
  console.error('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('beforeExit', () => {
  app.close((error) => {
    if (error) console.error(JSON.stringify(error), error.stack);
  });
});

module.exports = server;
