const bankController = require('../controllers/signup.controller');
const transferController = require('../controllers/transfers.controller');
const express = require('express');
const router = express.Router();

router
    .post('/', transferController.transferencia)
    .post('/signup', bankController.signup)
    .post('/login', bankController.login);

module.exports = router;