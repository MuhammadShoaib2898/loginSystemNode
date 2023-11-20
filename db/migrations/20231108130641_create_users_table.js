const UserModel = require('../models/User.model');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(UserModel.tableName, function (table) {
    table.increments('id').primary();
    table.string('first_name', 100);
    table.string('last_name', 100);
    table.string('email', 100).unique();
    table.string('password');
    table.string('phone_number', 20);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(UserModel.tableName);
};
