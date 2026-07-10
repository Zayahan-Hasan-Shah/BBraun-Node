const UserTypeDTO = require("../DTOs/UserTypeDTO");

class UserDTO {
    constructor(user) {
        this.id = user._id.toString();
        this.name = user.Name;
        this.email = user.Email;
        this.phoneNumber = user.PhoneNumber;
        this.password = user.PasswordHash;
        this.createdAt = user.CreatedAt;
        this.deletedAt = user.DeletedAt;
        this.userType = user.UserType
            ? new UserTypeDTO(user.UserType)
            : null;
    }
}

module.exports = UserDTO;