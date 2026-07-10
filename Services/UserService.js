const UserModel = require('../Models/UserModel');
const User = require('../Models/UserModel');
const UserRole = require('../Models/UserRole');

class UserService {
    static async GetAllUsers() {
        try {
            const users = await UserModel.find().populate('UserType');
            if (!users) {
                throw new Error("Failed to load users");
            }
            return users;
        } catch (e) {
            throw new Error("Failed to load users");
        }

    }
}

module.exports = UserService;