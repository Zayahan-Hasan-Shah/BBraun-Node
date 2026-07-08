const express = require('express');
const {Login} = require('../Controllers/AuthControllers');
const router = express.Router();


router.post('/login', Login);

module.exports = router;