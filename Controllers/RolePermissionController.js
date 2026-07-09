const RolePermissionService = require("../Services/RolePermissionService");

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
            message: "Internal Server Error"
        });
    }
}

module.exports = { GetAllPermissions }