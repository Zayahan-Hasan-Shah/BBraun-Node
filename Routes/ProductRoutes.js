const express = require("express");
const { CreateProduct, GetAllProducts, GetProductById, updateProduct } = require("../Controllers/ProductController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const {ProductValidationMiddleware, validateUpdateProduct} = require("../Middlewares/ProductMiddleware");
const router = express.Router();

router.post('/createproduct', authMiddleware, ProductValidationMiddleware, CreateProduct);
router.get('/getallproducts', authMiddleware, GetAllProducts);
router.get('/getproductbyid/:id', authMiddleware, GetProductById);
router.put('/updateproduct/:id', authMiddleware, validateUpdateProduct, updateProduct);

module.exports = router;