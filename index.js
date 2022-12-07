var express = require('express');
var app = express();

var usersRouter = require('./routes/usersRoutes');

const mysql = require('mysql');

app.get('/', (req, res) => {
    res.send('hello world')
})

const db = mysql.createConnection({host: "localhost",   user: "root",   password: "root", database: "annuaire-api"});

db.connect(function(err) {
    if (err) throw err;   console.log("Connecté à la base de données MySQL!");
});

app.use('/users', usersRouter);

app.listen(3000);