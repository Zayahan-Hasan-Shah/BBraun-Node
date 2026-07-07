const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    PhoneNumber: {
        type: String,
        required: true,
    },
    PasswordHash: {
        type: String,
        required: true,
    },
    CreatedAt: {
        type: Date.now(),
        required: true,
        default: null,
    },
    DeletedAt: {
        type: Date,
        default: null,
    },
    UserType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsserType',
    },
    Roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Roles'
    },

});

module.exports = mongoose.model("User", UserSchema);
