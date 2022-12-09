const db = require('../config/db');

module.exports = {
    register: (data, callBack) => {
        db.query(
            `INSERT INTO user(email, password, roles, firstname, lastname, created_at, my_group_id) VALUES(?,?,'[]',?,?,NOW(),23)`,
            [
                data.email,
                data.password,
                data.firstname,
                data.lastname,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        db.query(
            `SELECT * FROM user WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        db.query(
            `SELECT id, email, firstname, lastname FROM user WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsers: callBack => {
        db.query(
            `SELECT id, email, firstname, lastname FROM user`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        db.query(
            `UPDATE user SET email=?, password=?, firstname=?, lastname=? WHERE id = ?`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.password,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        db.query(
            `DELETE FROM user WHERE id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};