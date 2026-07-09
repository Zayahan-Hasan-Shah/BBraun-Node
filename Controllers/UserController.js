const UserService = require("../Services/UserService");

const GetAllUsers = async (req, res,) => {
    try {
        const result = await UserService.GetAllUsers();

        if (result.length == 0) {
            return res.status(200).json({
                status: 200,
                users: result
            });
        }

        return res.status(200).json({
            users: result
        });
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = { GetAllUsers }