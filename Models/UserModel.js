const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
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
        type: Date,
        default: Date.now(),
    },
    DeletedAt: {
        type: Date,
        default: null,
    },
    UserType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType',
    },
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


UserSchema.virtual('Roles', {
    ref: 'UserRole',           // The model to use
    localField: '_id',         // Find UserRoles where `UserId`...
    foreignField: 'UserId',    // ...matches this User's `_id`
});


module.exports = mongoose.model("User", UserSchema);
