const mongoose = require("mongoose");

const divisionSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
    },
    DeletedAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

mongoose.exports = mongoose.model("Division", divisionSchema);