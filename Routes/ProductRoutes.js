const express = require("express");
const { CreateProduct} = require("../Controllers/ProductController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const ProductValidationMiddleware = require("../Middlewares/ProductMiddleware");
const router = express.Router();

router.post('/createproduct', authMiddleware, ProductValidationMiddleware, CreateProduct);

module.exports = router;