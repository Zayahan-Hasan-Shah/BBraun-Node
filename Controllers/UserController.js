const UserService = require("../Services/UserService");
const UserDto = require("../DTOs/UserDTO");

const GetAllUsers = async (req, res,) => {
    try {
        const result = await UserService.GetAllUsers();
        const users = result.map(user => new UserDto(user));

        if (result.length == 0) {
            return res.status(200).json({
                status: 200,
                users: users
            });
        }

        return res.status(200).json({
            users: users
        });
    } catch (e) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = { GetAllUsers }