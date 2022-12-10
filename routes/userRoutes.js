var express = require('express');
var routeur = express.Router();
var app = express();
const { checkToken } = require("../auth/tokenValidation");
const {
    register,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser
} = require("../controllers/userController");


app.use(express.json());

routeur.post('/login', login)

routeur.post('/register', register)

routeur.get('/id/:id', checkToken, getUserByUserId);

routeur.get('/all', checkToken, getUsers);

routeur.put('/update', checkToken, updateUsers);

routeur.delete('/delete', checkToken, deleteUser);

module.exports = routeur;