const express = require('express')
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Database Connections

const Cors  = require('cors')
app.use(Cors())

require('./dbConnection/DbConnect.js');



// api part
const APIs = require('./Api');
app.use('/', APIs)

app.get('*',(req,res)=>{
  res.send("<h1>Page not found 404</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})