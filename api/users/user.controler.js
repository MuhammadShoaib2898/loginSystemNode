const userService = require('./user.service');
const bcrypt = require('bcrypt');

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        console.log(body);
        const salt = bcrypt.genSaltSync(10);
        body.password = bcrypt.hashSync(body.password, salt);
        userService.create(body, (err, result) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },
    getUser: (req, res) => {
        userService.getUser((err, result) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    },
    getUserByID: (req, res) => {
        const body = req.body;
        const id = req.query.id;
        console.log(id);
        userService.getUserByID(id, (err, result) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            if(!result){
                res.json({
                    success: 0,
                    data: "No record found"
                }); 
            }
            return res.status(200).json({
                success: 1,
                data: result
            });
        });
    }
}