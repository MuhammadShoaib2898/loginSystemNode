require('dotenv').config();
<<<<<<< HEAD
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require('./api/users/user.router');
// app.use(express.json());
// 
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     return res.send(req.params.id);
// }); 
// app.use('/user-added', (req, res) => {
//     res.send('User Added Successfully');
// });
// // app.get('/user', (req, res) => {
// //     res.send('<from action="/user" method="POST"><input type="text" name="first_name"><button type="submit">Submit</button></form>')
// // }); 
// app.post('/user', (req, res) => {
//     // res.redirect('/user-added')
//     console.log(req.body);
//     res.send(req.body);
// });
app.use('/api/user', userRouter);

app.listen(process.env.APP_PORT);
=======
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
>>>>>>> a1fd8d4d77d72978ceac80e284820df1d2c355dd
