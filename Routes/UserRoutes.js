const express = require("express");
const { GetAllUsers } = require("../Controllers/UserController");
const authMiddleware = require("../Middlewares/AuthMiddleware")
const router = express.Router();


router.get('/getallusers', authMiddleware, GetAllUsers);

module.exports = router;