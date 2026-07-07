const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    PrivilegeLevel: {
        type: Number,
        required: true,
    },
    IsSystem: {
        type: Boolean,
        required: true,
    },
    DeletedAt: {
        type: Date,
        default: null,
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Role', roleSchema);

