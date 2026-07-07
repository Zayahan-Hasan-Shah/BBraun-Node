const mongoose = require('mongoose');

const UserTypeSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    IsSystem: {
        type: Boolean,
        default: false,
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('UserType', UserTypeSchema);