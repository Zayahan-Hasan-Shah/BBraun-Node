const mongoose = require("mongoose");

const validateCreateRole = (req, res, next) => {
    const { roleName, permissionId } = req.body;

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Request body cannot be empty."
        });
    }

    if (!roleName || typeof roleName !== "string" || roleName.trim() === "") {
        return res.status(400).json({
            message: "roleName is required and must be a non-empty string."
        });
    }

    if (!permissionId) {
        return res.status(400).json({
            message: "permissionId is required."
        });
    }

    if (!Array.isArray(permissionId)) {
        return res.status(400).json({
            message: "permissionId must be an array."
        });
    }

    if (permissionId.length === 0) {
        return res.status(400).json({
            message: "permissionId array cannot be empty."
        });
    }

    for (const id of permissionId) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: `Invalid permissionId: ${id}`
            });
        }
    }

    next();
}

module.exports = validateCreateRole;