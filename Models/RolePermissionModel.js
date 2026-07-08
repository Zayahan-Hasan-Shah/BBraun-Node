const mongoose = require('mongoose');

const RolePermissionSchema = new mongoose.Schema({
    RoleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        required: true,
    },
    PermissionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Permission',
        required: true,
    }
});

module.exports = mongoose.model('RolePermission', RolePermissionSchema);