const Division = require("../Models/DivisionModel");

class DivisionService {
    static async createDivision(name, description) {
        try {
            const division = await Division.create({
                Name: name,
                Description: description || null,
            });
            return division;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to create division");
        }
    }

    static async getAllDivisions() {
        try {

            const divisions = await Division.find({ DeletedAt: null }).sort({ createdAt: -1 });
            return divisions || [];
        } catch (error) {
            console.log(error);
            throw new Error("Failed to load divisions");
        }
    }

    static async getDivisionById(divisionId) {
        try {
            const division = await Division.findOne({ _id: divisionId, DeletedAt: null });
            if (!division) {
                throw new Error("Division not found");
            }
            return division;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to load division");
        }
    }

    static async updateDivision(divisionId, name, description) {
        try {
            const updatedDivision = await Division.findOneAndUpdate(
                { _id: divisionId, DeletedAt: null },
                {
                    Name: name,
                    Description: description || null
                },
                { new: true }
            );

            if (!updatedDivision) {
                throw new Error("Division not found");
            }
            return updatedDivision;
        } catch (error) {
            console.log(error);
            throw new Error("Failed to update division");
        }
    }

    static async deleteDivisionById(divisionId) {
        try {
            
            const division = await Division.findOneAndUpdate(
                { _id: divisionId, DeletedAt: null },
                { DeletedAt: new Date() },
                { new: true }
            );

            if (!division) {
                throw new Error("Division not found");
            }
            return true;
        } catch (e) {
            console.log(e);
            throw new Error("Failed to delete division");
        }
    }
}

module.exports = DivisionService;