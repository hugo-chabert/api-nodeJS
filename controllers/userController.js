const db = require('../config/db');
const userModel = require('../models/userModel');

class UserController{
    users(req, res){
        var sql = 'SELECT * FROM user';
        db.query(sql, (err, result) => {
            if(err) throw err;
            res.status(200);
            res.send(result);
        })
    }
}

module.exports = UserController;