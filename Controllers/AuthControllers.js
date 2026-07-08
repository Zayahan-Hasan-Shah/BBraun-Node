const AuthService = require('../Services/AuthService');

exports.Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;

        const result = await AuthService.AuthenticateUser(Email, Password);

        res.status(200).json({
            message: "Login Successful",
            token: result.token,
            user: result.user,
        });
    } catch (e) {
        if (e.message === "Invalid credentials") {
            return res.status(400).json({ message: e.message });
        }

        console.error("Login Error: ", e);
        res.status(500).json({ message: "Internal Server Error" });

    }
}