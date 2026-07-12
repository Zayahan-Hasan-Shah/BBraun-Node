const RolePermissionService = require("../Services/RolePermissionService");
const { CreateRoleDto, RolePermissionDTO } = require("../DTOs/RolePermissionDTO");

const GetAllPermissions = async (req, res) => {
    try {
        const result = await RolePermissionService.GetAllPermissions();

        if (result.length == 0) {
            return res.status(200).json({
                status: 200,
                permissions: result
            });
        }

        return res.status(200).json({
            permissions: result
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error ${e}`
        });
    }
}

const CreateRole = async (req, res) => {
    try {
        const dto = new CreateRoleDto(
            req.body.roleName,
            req.body.permissionId
        );

        await RolePermissionService.createRole(
            dto.roleName,
            dto.permissionId
        );

        return res.status(201).json({
            message: "Role created successfully"
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`,
        });
    }
}


const GetAllRolePermissions = async (req, res) => {
    try {
        const result = await RolePermissionService.getAllRolePermissions();
        const response = result.map(
            role => new RolePermissionDTO(role)
        );

        return res.status(200).json({
            roles: response
        });

    } catch (e) {
        return res.status(500).json({
            message: e.message
        });
    }
}

module.exports = { GetAllPermissions, CreateRole, GetAllRolePermissions }