<<<<<<< HEAD
const pool = require('../../config/database');

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
                values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (err, result, field) => {
                if(err){
                   return callback(err);
                }
                return callback(null, result);
            }     
        );
    },
    getUser: callback => {
        pool.query(
            `select * from registration`,
            [],
            (err, result, field) => {
                if(err){
                    return callback(err);
                }
                return callback(null, result);
            }
        );
    },
    getUserByID: (id, callback) => {
        pool.query(
            `select * from registration where id = ?`,
            [id],
            (err, result, field) => {
                if(err){
                    return callback(err);
                }
                return callback(null, result);
            }
        );
    },
    updateUser: (data, callback) => {
        pool.query(
            `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (err, result, field) => {
                if(err){
                    return callback(err);
                }
                return callback(null, result);
            }
        );
    },
}
=======
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
>>>>>>> a1fd8d4d77d72978ceac80e284820df1d2c355dd
