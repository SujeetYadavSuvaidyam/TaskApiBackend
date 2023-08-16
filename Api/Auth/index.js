const express = require('express');
const app = express.Router();

const Register = require('./Register');
const Login = require('./Login');
app.post('/register', Register)
app.post('/login', Login)



module.exports = app;