class UserTypeDTO {
    constructor(userType) {
        this.id = userType._id.toString();
        this.name = userType.Name;
        this.isSystem = userType.IsSystem;
    }
}

module.exports = UserTypeDTO;