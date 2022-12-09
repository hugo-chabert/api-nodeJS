var express = require('express');
var routeur = express.Router();
var app = express();
const {
    register,
    users,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser
} = require("../controllers/userController");


app.use(express.json());

routeur.post('/login', function(req, res){
    res.send('login');
})

routeur.post('/register', register)

routeur.get('/', users);

routeur.get('/id/:id', (req, res) =>{
    res.send(':id');
})

routeur.get('/me', (req, res) =>{
    res.send('me');
})


routeur.put('/me', (req, res) =>{

})

routeur.delete('/id/:id', (req, res) =>{

})

routeur.put('/id/:id', (req, res) =>{

})

module.exports = routeur;