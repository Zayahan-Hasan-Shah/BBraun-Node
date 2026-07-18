const express = require("express");
const { GetAllPermissions, CreateRole, GetAllRolePermissions, UpdateRole, DeleteRole } = require("../Controllers/RolePermissionController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const roleValidationMiddleware = require("../Middlewares/RoleValidationMiddleware");
const router = express.Router();

router.get('/getallpermissions', authMiddleware, GetAllPermissions);
router.post('/createrole', authMiddleware, roleValidationMiddleware, CreateRole);
router.get('/getallroles', authMiddleware, GetAllRolePermissions);
router.put('/updaterole/:roleId', authMiddleware, roleValidationMiddleware, UpdateRole);
router.delete('/deleterole/:roleId', authMiddleware, DeleteRole);

module.exports = router;