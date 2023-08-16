const JWT = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI";

module.exports = async (req, res , next)=>{
    try {
        let {token} = req.headers;
        if(token){
            let decoded = JWT.verify(token, SECRET_KEY);
            req.decoded = decoded;
            next() 
        }else{
            return res.status(401).json({message:"Token not found Please enter token in header"})
        }

    } catch (error) {
        return res.status(500).json({message:"internal Server error"+ error})
    }
}