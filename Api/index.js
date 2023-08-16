const express = require('express');
const app = express.Router();

const auth = require('./Auth')
app.use('/auth',auth);

const verifyToken = require('./Auth/VerifyToken')
app.use(verifyToken);

app.use('/task', require('./Task'))

 


app.get('/abc',(req,res)=>{
    res.send('hello sujee')
})



module.exports = app;