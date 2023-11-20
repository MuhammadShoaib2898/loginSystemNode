require('dotenv').config();
const express = require('express');

const app = express();
const { APP_PORT } = process.env;
const userRouter = require('./api/users/user.router');
const errorHandler = require('./middlewares/error.middleware');

app.use(express.json());

app.use('/api/user', userRouter);

app.use(errorHandler);

app.listen(APP_PORT, () => {
  console.log(`Server is running on port: ${APP_PORT}`);
});
