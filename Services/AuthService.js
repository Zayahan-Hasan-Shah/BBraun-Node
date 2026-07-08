const UserModel = require('../Models/UserModel');
const UserType = require('../Models/UserType');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthService {
    static async AuthenticateUser(email, password) {
        const user = await UserModel.findOne({ Email: email }).populate('UserType');
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.PasswordHash);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const payload = {
            user: {
                id: user._id,
                email: user.Email,
                type: user.UserType ? user.UserType.Name : null,
            }
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn: '1d'
            }
        );

        return {
            token: token,
            user: {
                name: user.Name,
                email: user.Email
            }
        };
    }
}

module.exports = AuthService;