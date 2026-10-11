const DivisionService = require("../Services/DivisionService");
const { DivisionDTO, UpdateDivisionDTO } = require("../DTOs/DivisionDTO");

const CreateDivision = async (req, res) => {
    try {
        const dto = new DivisionDTO({
            Name: req.body.Name,
            Description: req.body.Description
        });

        const created = await DivisionService.createDivision(dto.Name, dto.Description);
        return res.status(201).json({
            message: "Division created successfully",
            division: created
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`
        });
    }
};

const GetAllDivisions = async (req, res) => {
    try {
        const divisions = await DivisionService.getAllDivisions();
        return res.status(200).json({
            divisions,
            message: "Divisions loaded successfully"
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`
        });
    }
};

const GetDivisionById = async (req, res) => {
    try {
        const division = await DivisionService.getDivisionById(req.params.id);
        return res.status(200).json({
            division,
            message: "Division loaded successfully"
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message || "Division not found"
        });
    }
};

const UpdateDivision = async (req, res) => {
    try {
        const dto = new UpdateDivisionDTO({
            _id: req.params.id,
            Name: req.body.Name,
            Description: req.body.Description
        });

        const updated = await DivisionService.updateDivision(dto.id, dto.Name, dto.Description);
        return res.status(200).json({
            division: updated,
            success: true,
            message: "Division updated successfully"
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`
        });
    }
};

const DeleteDivisionById = async (req, res) => {
    try {
        await DivisionService.deleteDivisionById(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Division deleted successfully"
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error: ${e.message}`
        });
    }
};

module.exports = {
    CreateDivision,
    GetAllDivisions,
    GetDivisionById,
    UpdateDivision,
    DeleteDivisionById
};