const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
    Id: {
        type: Number,
        required: true,
        unique: true,
    },
    Name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Permission', PermissionSchema);