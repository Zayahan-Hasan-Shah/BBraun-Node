class PermissionDTO {
    constructor(permission) {
        this.id = permission._id.toString();
        this.name = permission.Name;
        this.permissionSQLId = permission.Id;
    }
}

module.exports = PermissionDTO;