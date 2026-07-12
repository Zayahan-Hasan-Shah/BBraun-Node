class CreateRoleDTO {
    constructor(roleName, permissionId) {
        if (typeof roleName !== "string" || roleName.trim() === "") {
            throw new Error("roleName must be a non-empty string.");
        }

        if (!Array.isArray(permissionId)) {
            throw new Error("permissionId must be an array.");
        }

        this.roleName = roleName;
        this.permissionId = permissionId;
    }
}

class RolePermissionDTO {
    constructor(role) {
        this.id = role._id;
        this.name = role.Name;
        this.isSystem = role.IsSystem;

        this.permissions = role.permissions.map(permission => ({
            id: permission._id,
            name: permission.Name
        }));
    }
}



module.exports = {CreateRoleDTO, RolePermissionDTO};