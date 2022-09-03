const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

//const numRounds = host controlled, input by host on startup?

router.get('/signup', (req, res) => {
    res.render('pages/signup', 
    {errors: null});
});

router.post('/sig')
