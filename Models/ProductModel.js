const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },

    Code: {
        type: String,
        required: false,
        default: null,
    },
    DeletedAt: {
        type: Date,
        default: null,
    },
    softDelete: {
        type: Boolean,
        default: false, // 1 means not soft deleted
    }
});

module.exports = mongoose.model("Product", productSchema);