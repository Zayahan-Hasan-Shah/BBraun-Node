const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Roles: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }
});

module.exports = mongoose.model('Permission', PermissionSchema);