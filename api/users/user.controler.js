const userService = require('./user.service');
const bcrypt = require('bcrypt');

module.exports = {
    createUser: (req, res) => {
        console.log(req);
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
    }
}