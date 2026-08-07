const mongoose = require("mongoose");


const validateCreateProduct = (req, res, next) => {

    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400).json({
            message: "Request body cannot be empty."
        });
    }
    
    
    const { Name, Code} = req.body;

    if(!Name || typeof Name !== "string" || Name.trim() === ""){
        return res.status(400).json({
            message: "Name is required and must be a non-empty string."
        });
    }

    if(Code && (typeof Code !== "string" || Code.trim() === "")){
        return res.status(400).json({
            message: "Code must be a non-empty string if provided."
        });
    }

    next();
}

module.exports = validateCreateProduct;