require('dotenv').config();
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