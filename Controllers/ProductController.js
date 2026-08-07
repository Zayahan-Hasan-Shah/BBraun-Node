const ProductService = require("../Services/ProductService");
const { ProductDTO } = require("../DTOs/ProductDTO");

const CreateProduct = async (req, res) => {
    try {
        const prod = new ProductDTO({
            Name: req.body.Name,
            Code: req.body.Code
        });

        await ProductService.createProduct(
            prod.Name,
            prod.Code
        );

        return res.status(201).json({
            message: "Product created successfully",
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error ${e}`
        });
    }
}


const GetAllProducts = async (req, res) => {
    try {
        const products = await ProductService.getAllProducts();
        return res.status(200).json({
            products: products,
            message: "Products loaded successfully"
        });
    } catch (e) {
        return res.status(500).json({
            message: `Internal Server Error ${e}`
        });
    }
}

const GetProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductService.getProductById(productId);
        return res.status(200).json({
            product: product,
            message: "Product loaded successfully"
        });
    }
    catch (e) {
        return res.status(500).json({
            message: `Internal Server Error ${e}`
        });
    }
}

module.exports = {
    CreateProduct,
    GetAllProducts,
    GetProductById
};