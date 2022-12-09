var express = require('express');
var app = express();

var usersRouter = require('./routes/userRoutes');

app.use(express.json());

app.use('/users', usersRouter);

app.listen(3000);