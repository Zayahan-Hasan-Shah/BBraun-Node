const express = require("express");
const {GetAllPermissions} = require("../Controllers/RolePermissionController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const router = express.Router();

router.get('/getallpermissions', authMiddleware, GetAllPermissions);

module.exports = router;