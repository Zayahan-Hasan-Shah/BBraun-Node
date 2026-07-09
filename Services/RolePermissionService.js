const Permission = require('../Models/PermissionModel');
const Role = require('../Models/RoleModel');
const RolePermission = require('../Models/RolePermissionModel');

class RolePermissionService {

    static async GetAllPermissions() {
        try {
            const permissions = await Permission.find();
            if (!permissions) {
                throw new Error("Failed to load permissions");
            }
            return permissions
        } catch (e) {
            throw new Error("Failed to load permissions");
        }
    }
}