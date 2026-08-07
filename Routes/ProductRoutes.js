const express = require("express");
const { CreateProduct, GetAllProducts, GetProductById } = require("../Controllers/ProductController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const ProductValidationMiddleware = require("../Middlewares/ProductMiddleware");
const router = express.Router();

router.post('/createproduct', authMiddleware, ProductValidationMiddleware, CreateProduct);
router.get('/getallproducts', authMiddleware, GetAllProducts);
router.get('/getproductbyid/:id', authMiddleware, GetProductById);

module.exports = router;