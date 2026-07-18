const RolePermissionService = require("../Services/RolePermissionService");
const { CreateRoleDTO, RolePermissionDTO } = require("../DTOs/RolePermissionDTO");

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
        const dto = new CreateRoleDTO(
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
        console.log(`${e}`);
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

const UpdateRole = async (req, res) => {
    try {
        const dto = new CreateRoleDTO(
            req.body.roleName,
            req.body.permissionId
        );

        await RolePermissionService.updateRole(
            dto.roleName,
            req.params.roleId,
            dto.permissionId
        );

        return res.status(200).json({
            message: "Role updated successfully"
        });

    } catch (e) {
        console.log(`${e}`);
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`
        });
    }
};


const DeleteRole = async (req, res) => {
    try {
        await RolePermissionService.deleteRole(
            req.params.roleId
        );

        return res.status(200).json({
            message: "Role deleted successfully"
        });

    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`
        });
    }
}

module.exports = { GetAllPermissions, CreateRole, GetAllRolePermissions, UpdateRole, DeleteRole }