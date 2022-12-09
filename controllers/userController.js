const db = require('../config/db');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {
    register,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser
    } = require("../services/userService");
module.exports = {

    users(req, res){
        var sql = 'SELECT * FROM user';
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.status(200);
            res.send(result);
        })
    },

    register: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        console.log(req.body);
        register(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}