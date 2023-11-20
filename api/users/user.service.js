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