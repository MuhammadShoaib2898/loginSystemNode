const userService = require('./user.service');

module.exports = {
  createUser: async (req, res, next) => {
    try {
      await userService.createUser(req.body);
      return res.status(201).json({ statusCode: 201, data: {} });
    } catch (error) {
      next(error);
    }
  },

  getUserById: async (req, res, next) => {
    try {
      const user = await userService.getUserById(req.params);
      return res.status(200).json({ statusCode: 200, data: user });
    } catch (error) {
      next(error);
    }
  },

  updateUserById: (req, res, next) => {},

  deleteUserById: (req, res, next) => {},
};
