const knex = require('../../db/database');
const UserModel = require('../../db/models/User.model');

module.exports = {
  createUser: async (body) => {
    const { first_name, last_name, email, phone_number } = body;

    const isDuplicateEmail = await knex(UserModel.tableName).where({ email }).first();

    if (isDuplicateEmail) {
      const error = new Error('This Email Is Already Taken');
      error.statusCode = 400;
      throw error;
    }

    await knex(UserModel.tableName).insert({
      first_name,
      last_name,
      email,
      phone_number,
    });
  },

  getUserById: async (params) => {
    const { id } = params;

    const user = await knex(UserModel.tableName).where({ id }).first();

    return user;
  },

  updateUserById: () => {},

  deleteUserById: () => {},
};
