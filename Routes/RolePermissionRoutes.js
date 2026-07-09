const express = require("express");
const {GetAllPermissions} = require("../Controllers/RolePermissionController");
const router = express.Router();

router.get('/getallpermissions', GetAllPermissions);

module.exports = router;