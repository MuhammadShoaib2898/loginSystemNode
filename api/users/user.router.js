const router = require('express').Router();
const userControler = require('./user.controller');

router.post('/', userControler.createUser);
router.get('/:id', userControler.getUserById);
router.patch('/:id', userControler.updateUserById);
router.delete('/:id', userControler.deleteUserById);

module.exports = router;
