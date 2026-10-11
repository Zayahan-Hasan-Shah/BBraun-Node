class DivisionDTO {
    constructor(division) {
        this.Name = division.Name;
        this.Description = division.Description || null;
        this.DeletedAt = division.DeletedAt || null;
    }
}
class UpdateDivisionDTO {
    constructor(division) {
        this.id = division._id || division.id;
        this.Name = division.Name;
        this.Description = division.Description || null;
    }
}
module.exports = { DivisionDTO, UpdateDivisionDTO };