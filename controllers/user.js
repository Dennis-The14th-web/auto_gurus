const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.js');


const secret = 'test';


const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist!" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "User doesn't exist!" });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, {expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Ooops... Something went wrong!" })
    }
}


const signInQuery = async (req, res) => {
    const { email } = req.params;
    try {
        const sendUser = await User.findOne({ email });
        console.log("EMAIL: ", email)
        res.status(200).json(sendUser);
    } catch (err) {
        res.status(500).json({ message: "Oh no... Something went wrong!" })
    }
}


const signUp = async (req, res) => {
    const { email, 
            password, 
            confirmPassword, 
            firstName,
            lastName} = req.body;
            console.log("REQ BODY", email, password, confirmPassword, firstName, lastName);
            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) return res.status(400).json({ message: "User already exists!" });
                if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match. Try again." });
                const hashedPassword = await bcrypt.hash(password, 12);
                const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
                const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });
                res.status(201).json({ result, token });
            } catch (error) {
                res.status(500).json({ message: "Dang... Something went wrong!" });
                console.log(error);
            }
}


const router = { signIn, signInQuery, signUp };
module.exports = router;