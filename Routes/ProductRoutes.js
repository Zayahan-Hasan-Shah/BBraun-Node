const express = require("express");
const { CreateProduct, GetAllProducts, GetProductById, updateProduct, deleteProductById } = require("../Controllers/ProductController");
const authMiddleware = require("../Middlewares/AuthMiddleware");
const {validateCreateProduct, validateUpdateProduct} = require("../Middlewares/ProductMiddleware");
const router = express.Router();

router.post('/createproduct', authMiddleware, validateCreateProduct, CreateProduct);
router.get('/getallproducts', authMiddleware, GetAllProducts);
router.get('/getproductbyid/:id', authMiddleware, GetProductById);
router.put('/updateproduct/:id', authMiddleware, validateUpdateProduct, updateProduct);
router.delete('/deleteproduct/:prodId', authMiddleware, deleteProductById);

module.exports = router;