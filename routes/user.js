const express = require('express');

const router = express.Router();


const { signIn, signInQuery, signUp } = require('../controllers/user');

router.post('/signin', signIn);
router.post('/signinquery', signInQuery);
router.post('/signup', signUp);

module.exports = router;