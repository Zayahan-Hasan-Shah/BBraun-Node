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
    }
});

module.exports = mongoose.model("Product", productSchema);