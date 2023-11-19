const userControler = require('./user.controler');
const router = require('express').Router();

router.post('/', userControler.createUser);

module.exports = router;