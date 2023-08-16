const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const SECRET_KEY = "NOTESAPI"
const User = require('../../Model/User.js');
const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(404).json({ message: 'please enter name email and password' })
        }

        else {
            const exitingtUser = await User.findOne({ email: email });
            if (exitingtUser) {
                return res.status(400).json({ message: 'User already exits' })
            }
            const hashedpassword = await bcrypt.hash(password, 10);
            const result = await User.create({
                email: email,
                password: hashedpassword,
                name: name
            });

            return res.status(200).json({ message: 'New user created', result });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Something went wrong${error}` })
    }
}


module.exports = Register;