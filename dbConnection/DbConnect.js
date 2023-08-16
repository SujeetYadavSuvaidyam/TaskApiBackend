const mongoose = require('mongoose');
const url = "mongodb+srv://abhisuvaidyam:learnSuvDatabase987@database.9kwsscw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, { useNewUrlParser: true }).then( ()=>{
    console.log("DataBase Connected Successfully")
}).catch((err)=>{
    console.log(`Opps Something Went wrong:   ${err}`)
})
