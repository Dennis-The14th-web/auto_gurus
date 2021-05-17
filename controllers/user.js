const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
let router = express.Router();

const secret = 'test';


// router.post('/signin', async(req, res) => {
const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exist!" });
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials!" });
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, {expiresIn: "1h" });
        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: "Yayks... Something went wrong!"})
    }
}
// )

// router.post('/signup', async(req, res) => {
const signUp = async (req, res) => {
    const { email, 
            password, 
            confirmPassword, 
            firstName,
            lastName} = req.body;
            try {
                const existingUser = await User.findOne({ email });
                if (existingUser) return res.status(400).json({ message: "User already exists!" });
                if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match. Try again." });
                const hashedPassword = await bcrypt.hash(password, 12);
                const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
                const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });
                res.status(201).json({ result, token });
            } catch (error) {
                res.status(500).json({ message: "Dang... Something went wrong!"});
                console.log(error);
            }
}
// )

router = { signIn, signUp };
module.exports = router;