const userControler = require('./user.controler');
const router = require('express').Router();

router.post('/', userControler.createUser);
router.get('/getuser', userControler.getUser);
router.get('/getuserbyid', userControler.getUserByID);
router.patch('/updateUser', userControler.updateUser);

module.exports = router;