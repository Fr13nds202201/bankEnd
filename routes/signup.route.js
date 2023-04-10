const bankController = require('../controllers/signup.controller');
const express = require('express');

const router = express.Router();

router
    .post('/signup', bankController.signup)
    .post('/login', bankController.login);

module.exports = router;