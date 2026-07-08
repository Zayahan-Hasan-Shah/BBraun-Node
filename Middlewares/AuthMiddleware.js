const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    let token = req.header('Authorization');
    if (!token) {
        res.status(401).json({
            status: 401,
            message: "Unauthorized"
        });
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length).trimLeft();
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (e) {
        res.status(401).json({
            status: 401,
            message: "Invalid Token"
        });
    }
}