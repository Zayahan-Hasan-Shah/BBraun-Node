const express = require("express");
const {
    CreateDivision,
    GetAllDivisions,
    GetDivisionById,
    UpdateDivision,
    DeleteDivisionById
} = require("../Controllers/DivisionController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const { validateCreateDivision, validateUpdateDivision } = require("../Middlewares/DivisionMiddleware");
const router = express.Router();
router.post('/createdivision', authMiddleware, validateCreateDivision, CreateDivision);
router.get('/getalldivisions', authMiddleware, GetAllDivisions);
router.get('/getdivisionbyid/:id', authMiddleware, GetDivisionById);
router.put('/updatedivision/:id', authMiddleware, validateUpdateDivision, UpdateDivision);
router.delete('/deletedivision/:id', authMiddleware, DeleteDivisionById);
module.exports = router;