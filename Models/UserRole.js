const mongoose = require('mongoose');

const UserRoleSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    RoleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    },
});


module.exports = mongoose.model('UserRole', UserRoleSchema);