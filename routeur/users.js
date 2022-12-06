var express = require('express');
var routeur = express.Router();

routeur.post('/login', function(req, res){
    res.send('login');
})

routeur.post('/register', (req, res) =>{
    res.send('register');
})

routeur.get('/', (req, res) =>{
    res.send('users');
})

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