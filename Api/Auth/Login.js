const User = require('../../Model/User.js');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "NOTESAPI"

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(404).json({ message: 'please enter email and password' })
        }else{
            const exitingtUser = await User.findOne({ email: email });
        if (!exitingtUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        const matchPassword = await bcrypt.compare(password, exitingtUser.password);
        if (!matchPassword) {
            return res.status(400).json({ message: "Password are not match" });
        }
        const token = jwt.sign({ email: exitingtUser.email, id: exitingtUser._id }, SECRET_KEY);
        res.status(201).json({message:"Login sucessfully", token: token })
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Something went wrong${error}` })
    }
}
module.exports = Login;