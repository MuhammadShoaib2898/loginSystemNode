<<<<<<< HEAD
const userControler = require('./user.controler');
const router = require('express').Router();

router.post('/', userControler.createUser);
router.get('/getuser', userControler.getUser);
router.get('/getuserbyid', userControler.getUserByID);
router.patch('/updateUser', userControler.updateUser);

module.exports = router;
=======
const router = require('express').Router();
const userControler = require('./user.controller');

router.post('/', userControler.createUser);
router.get('/:id', userControler.getUserById);
router.patch('/:id', userControler.updateUserById);
router.delete('/:id', userControler.deleteUserById);

module.exports = router;
>>>>>>> a1fd8d4d77d72978ceac80e284820df1d2c355dd
