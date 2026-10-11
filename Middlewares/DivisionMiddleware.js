const mongoose = require("mongoose");

const validateCreateDivision = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            message: "Request body cannot be empty."
        });
    }

    const { Name, Description } = req.body;

    if (!Name || typeof Name !== "string" || Name.trim() === "") {
        return res.status(400).json({
            message: "Name is required and must be a non-empty string."
        });
    }

    if (Description && typeof Description !== "string") {
        return res.status(400).json({
            message: "Description must be a string if provided."
        });
    }

    next();
};

const validateUpdateDivision = (req, res, next) => {
    if (!req.params.id || !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            success: false,
            message: "Invalid division ID."
        });
    }

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const { Name, Description } = req.body;

    if (!Name || typeof Name !== "string" || Name.trim() === "") {
        return res.status(400).json({
            message: "Name is required and must be a non-empty string."
        });
    }

    if (Description && typeof Description !== "string") {
        return res.status(400).json({
            message: "Description must be a string if provided."
        });
    }

    next();
};

module.exports = { validateCreateDivision, validateUpdateDivision };